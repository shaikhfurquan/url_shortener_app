import crypto from 'crypto';

export class UrlShortener {
    static generateShortUrl() {
        return crypto.randomBytes(6).toString('hex');
    }
}