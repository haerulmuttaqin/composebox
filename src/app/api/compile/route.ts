import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import fs from 'fs-extra';
import path from 'path';

const KOTLIN_PROJECT_PATH = path.resolve(process.cwd(), 'kotlin-compiler');
const MAIN_KT_PATH = path.join(KOTLIN_PROJECT_PATH, 'src/main/kotlin/Main.kt');
const BUILD_OUTPUT_DIR = path.join(KOTLIN_PROJECT_PATH, 'build/dist/js/productionExecutable');
const PUBLIC_OUTPUT_DIR = path.join(process.cwd(), 'public/compose-output');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const code = body.code;
    if (!code || typeof code !== 'string') {
      return NextResponse.json({ error: 'No code provided' }, { status: 400 });
    }

    // 1. Overwrite Main.kt dengan kode user
    await writeFile(MAIN_KT_PATH, code, 'utf-8');

    // 2. Jalankan build Compose Web (browserProductionWebpack)
    const buildResult = await new Promise<{ success: boolean; error?: string }>((resolve) => {
      exec(
        './gradlew browserProductionWebpack',
        { cwd: KOTLIN_PROJECT_PATH, timeout: 60000 },
        (error, stdout, stderr) => {
          if (error) {
            resolve({ success: false, error: stderr || error.message });
          } else {
            resolve({ success: true });
          }
        }
      );
    });

    if (!buildResult.success) {
      return NextResponse.json({ error: 'Build failed', detail: buildResult.error }, { status: 500 });
    }

    // 3. Copy hasil build ke public/compose-output
    await fs.ensureDir(PUBLIC_OUTPUT_DIR);
    await fs.emptyDir(PUBLIC_OUTPUT_DIR); // Kosongkan dulu
    await fs.copy(BUILD_OUTPUT_DIR, PUBLIC_OUTPUT_DIR);

    // 4. Return path ke index.html hasil build
    return NextResponse.json({ url: '/compose-output/index.html' });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', detail: String(err) }, { status: 500 });
  }
} 