import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const OUTPUT_BASE_DIR = path.join(process.cwd(), 'compose-compiler', 'compose-outputs');

const mimeTypes: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.wasm': 'application/wasm',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

export async function GET(
  req: NextRequest, 
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  if (slug.length < 2) {
    return new NextResponse('Invalid path', { status: 400 });
  }
  const filePath = path.join(OUTPUT_BASE_DIR, ...slug);
  try {
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    const fileContents = await fs.readFile(filePath);
    return new NextResponse(fileContents, {
      headers: { 'Content-Type': contentType },
    });
  } catch {
    return new NextResponse('File not found', { status: 404 });
  }
}

export const dynamic = 'force-dynamic'; 