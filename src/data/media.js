// Détection automatique des fichiers déposés dans src/assets : rien à modifier ici.

const byName = (a, b) => a[0].localeCompare(b[0]);

// Captures de projets : src/assets/projects/<id>/<image>
const projectFiles = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
export const screenshots = {};
Object.entries(projectFiles).sort(byName).forEach(([path, url]) => {
  const id = path.split('/').at(-2);
  (screenshots[id] ||= []).push(url);
});

// Galerie et attestations : fichiers indexés par leur nom.
const byFile = (files) => Object.fromEntries(Object.entries(files).map(([p, url]) => [p.split('/').at(-1), url]));
export const galleryFiles = byFile(import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
export const certificateFiles = byFile(import.meta.glob('../assets/certificates/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));

// CV : src/assets/cv/..._EN.pdf et ..._FR.pdf
const cvFiles = import.meta.glob('../assets/cv/*.pdf', { eager: true, query: '?url', import: 'default' });
export const cv = { en: null, fr: null };
Object.entries(cvFiles).forEach(([path, url]) => {
  if (/_EN\.pdf$/i.test(path)) cv.en = url;
  if (/_FR\.pdf$/i.test(path)) cv.fr = url;
});
