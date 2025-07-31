export function getPlaygroundUrl() {
    return process.env.PLAYGROUND_URL || (process.env.NODE_ENV === 'production'
        ? 'https://run.composebox.web.id'
        : 'http://run.localhost:3000');
}

export function getMainUrl() {
    return process.env.MAIN_URL || (process.env.NODE_ENV === 'production'
        ? 'https://composebox.web.id'
        : 'http://localhost:3000');
}

export function removeProtocol(url: string) {
    return url.replace(/^https?:\/\//, '');
}