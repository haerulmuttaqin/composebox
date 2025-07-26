import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { writeFile } from 'fs/promises';
import fs from 'fs-extra';
import path from 'path';
import crypto from 'crypto';

const KOTLIN_PROJECT_PATH = path.resolve(process.cwd(), 'compose-compiler');
const MAIN_KT_PATH = path.join(KOTLIN_PROJECT_PATH, 'composeApp/src/wasmJsMain/kotlin/org/example/project/App.kt')
const BUILD_OUTPUT_DIR = path.join(KOTLIN_PROJECT_PATH, 'composeApp/build/dist/wasmJs/developmentExecutable');
const PUBLIC_OUTPUT_DIR = path.join(process.cwd(), 'public/compose-output');

// Cleanup builds older than 1 hour
const cleanupOldBuilds = async () => {
    const outputBaseDir = path.join(process.cwd(), 'public', 'compose-output');
    const dirs = await fs.readdir(outputBaseDir);

    for (const dir of dirs) {
        if (dir === 'index.html') continue; // skip default file

        const dirPath = path.join(outputBaseDir, dir);
        const stats = await fs.stat(dirPath);
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);

        if (ageInHours > 1) {
            await fs.remove(dirPath);
        }
    }
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const code = body.code;
        if (!code || typeof code !== 'string') {
            return NextResponse.json({ error: 'No code provided' }, { status: 400 });
        }

        // Get or generate session ID
        let sessionId = req.cookies.get('compose-session-id')?.value;
        if (!sessionId) {
            sessionId = crypto.randomBytes(8).toString('hex');
        }
        const sessionOutputDir = path.join(process.cwd(), 'public', 'compose-output', sessionId);

        // 1. Overwrite Main.kt
        await writeFile(MAIN_KT_PATH, code, 'utf-8');

        // 2. Build
        const start = Date.now();
        const buildResult = await new Promise<{ success: boolean; error?: string }>((resolve) => {
            const build = spawn('./gradlew', ['wasmJsBrowserDevelopmentExecutable', '--no-configuration-cache'], {
                cwd: KOTLIN_PROJECT_PATH,
                timeout: 60000,
                shell: true,
                env: process.env,
            });
            let stderr = '';
            build.stdout.on('data', (data) => process.stdout.write(data));
            build.stderr.on('data', (data) => {
                process.stderr.write(data);
                stderr += data.toString();
            });
            build.on('close', (code) => {
                const end = Date.now();
                console.log('Build time:', (end - start) / 1000, 's');
                if (code === 0) {
                    resolve({ success: true });
                } else {
                    resolve({ success: false, error: stderr });
                }
            });
        });

        if (!buildResult.success) {
            return NextResponse.json({ error: 'Build failed', detail: buildResult.error }, { status: 500 });
        }

        // 3. Copy ke folder session
        await fs.ensureDir(sessionOutputDir);
        await fs.copy(BUILD_OUTPUT_DIR, sessionOutputDir);

        // 4. Cleanup old builds (optional)
        await cleanupOldBuilds();

        // 5. Return path session dengan cookie
        const response = NextResponse.json({ url: `/compose-output/${sessionId}/index.html` });

        // Set session cookie (expires in 24 hours)
        response.cookies.set('compose-session-id', sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60, // 24 hours
        });

        return response;
    } catch (err) {
        return NextResponse.json({ error: 'Internal server error', detail: String(err) }, { status: 500 });
    }
} 