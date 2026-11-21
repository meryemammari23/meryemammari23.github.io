// Génère public/qr-portfolio.png, le QR code vers le portfolio à mettre sur ton CV (lancé avant chaque build).
// Pour changer l'adresse : modifie SITE_URL dans src/data/profile.js, puis `npm run qr`.
import QRCode from 'qrcode';
import { readFileSync } from 'node:fs';

const profile = readFileSync(new URL('../src/data/profile.js', import.meta.url), 'utf8');
const url = profile.match(/siteUrl:\s*'([^']+)'/)[1];
const opts = { margin: 1, color: { dark: '#0b1630', light: '#ffffff' } };

await QRCode.toFile(new URL('../public/qr-portfolio.png', import.meta.url).pathname, url, { ...opts, width: 1024 });
console.log('QR code generated for', url);
