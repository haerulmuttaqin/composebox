import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {removeProtocol} from "@/app/utils/utils";

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host') || '';

    const mainDomain = process.env.NODE_ENV === 'production'
        ? removeProtocol(process.env.MAIN_URL || 'composebox.web.id')
        : removeProtocol(process.env.MAIN_URL || 'localhost:3000');

    if (hostname.startsWith('localhost')) {
        return NextResponse.next();
    }

    const playgroundHostname = `run.${mainDomain}`;

    if (hostname === playgroundHostname) {
        return NextResponse.rewrite(new URL(`/playground${url.pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};