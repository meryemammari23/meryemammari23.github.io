# Portfolio · Meryem AMMARI

Portfolio personnel bilingue (anglais / français) : **React 18 + Vite 6 + Tailwind CSS 3 + Lucide**.
Adresse prévue : **https://meryemammari23.github.io/**

---

## 1. Lancer le site sur ton PC

Prérequis : [Node.js 20 ou plus](https://nodejs.org) et Git.

```bash
npm install        # une seule fois
npm run dev        # ouvre http://localhost:5173 (le site se recharge à chaque modification)
npm run build      # crée la version finale dans dist/
npm run preview    # teste la version finale sur http://localhost:4173
```

---

## 2. Mettre le site en ligne (GitHub Pages, gratuit)

1. Sur GitHub, crée un dépôt **public** nommé exactement **`meryemammari23.github.io`** (sans README).
2. Dans le dossier du projet :

   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/meryemammari23/meryemammari23.github.io.git
   git push -u origin main
   ```

3. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. Onglet **Actions** : attends que « Deploy to GitHub Pages » soit vert (1 à 2 minutes).
5. Ouvre **https://meryemammari23.github.io/**.

Ensuite, **chaque `git push` met le site à jour automatiquement**.

> Si un jour tu mets le site dans un autre dépôt (ex. `portfolio`), l'adresse devient
> `https://meryemammari23.github.io/portfolio/` : change `base: '/'` en `base: '/portfolio/'` dans `vite.config.js`,
> et `siteUrl` dans `src/data/profile.js`.

---

## 3. Mettre à jour le contenu

Tout le contenu est dans **`src/data/`**. Tu n'as pas besoin de toucher aux composants.

| Je veux… | Fichier |
|---|---|
| Changer l'e-mail, LinkedIn, GitHub, la ville | `src/data/profile.js` |
| Modifier les textes (Hero, About, Contact, boutons…) | `src/data/translations.js` (EN puis FR) |
| Ajouter / retirer une compétence | `src/data/skills.js` |
| Ajouter un projet, un projet en cours | `src/data/projects.js` |
| Stages, vie associative, formation, certifications | `src/data/experience.js` |

Après une modification : `git add . && git commit -m "Mise à jour" && git push`.

### Ajouter un projet en cours

Dans `src/data/projects.js`, liste `inProgress` : `title`, `text`, `results` (une ligne de résultats ou `null`), `tags`, `url` (lien public ou `null`).

### Ajouter un projet

Dans `src/data/projects.js`, copie un bloc `{ id: ..., }`, puis :

- `id` : identifiant sans espaces (ex. `cold-chain`) ;
- `cats` : une ou plusieurs catégories parmi `ai`, `data`, `fullstack`, `se` (elles pilotent les filtres) ;
- `short` : une phrase en `en` et en `fr` ;
- `tech` : la liste des technologies ;
- `repo` : lien GitHub, ou `null` si le code est privé ;
- `demoUrl` : lien vers une démo en ligne, ou `null` ;
- `youtube` : identifiant de la vidéo YouTube (la partie après `v=`), ou `null` ;
- `details` : les textes de la fiche détaillée, ou `null` pour ne pas afficher « View Details ».

### Ajouter des captures d'écran

Crée un dossier au nom de l'`id` du projet et dépose les images dedans :

```
src/assets/projects/medical-extractor/01-accueil.png
src/assets/projects/medical-extractor/02-resultat.png
src/assets/projects/quoteflow/01-dashboard.png
```

La première image (ordre alphabétique) devient la couverture de la carte. Toutes apparaissent dans la fiche détaillée,
avec agrandissement au clic. Formats : png, jpg, webp. Pense à les compresser (idéalement < 400 Ko chacune,
par exemple avec [squoosh.app](https://squoosh.app)).

### Ajouter la vidéo de démo

1. Mets la vidéo sur YouTube en **« Non répertoriée »** (GitHub refuse les fichiers de plus de 100 Mo).
2. Copie l'identifiant (dans `https://www.youtube.com/watch?v=AbCdEf123`, c'est `AbCdEf123`).
3. Dans `src/data/projects.js`, mets `youtube: 'AbCdEf123'` sur le projet.

### Ajouter des photos à la galerie

1. Dépose la photo dans `src/assets/gallery/` (jpg, png ou webp, idéalement < 400 Ko).
2. Ajoute une ligne dans `src/data/gallery.js` avec le nom du fichier, une étiquette courte et la légende en `en` / `fr`.
L'ordre des lignes est l'ordre de défilement.

### Ajouter une attestation

Dépose l'image dans `src/assets/certificates/`, puis ajoute une entrée dans `certifications` (`src/data/experience.js`).

### Changer le CV

Dépose tes PDF dans `src/assets/cv/` avec ces noms exacts :

- `CV_Meryem_AMMARI_EN.pdf`
- `CV_Meryem_AMMARI_FR.pdf`

Le bouton « Download My CV » apparaît automatiquement et télécharge la version de la langue choisie sur le site.
S'il n'y a qu'une version, elle est proposée dans les deux langues.

### Changer la photo

Remplace `src/assets/profile.jpg` par une photo carrée (environ 600 × 600 px), en gardant le même nom.
Pour l'aperçu sur LinkedIn/WhatsApp, remplace aussi `public/og-image.jpg` (1200 × 630 px).

---

## 4. Fonctionnalités

- Navigation fixe avec section active, menu mobile, bouton EN / FR (le choix est mémorisé)
- Projets avec filtres, fiche détaillée, captures en plein écran et vidéo de démo
- Section « en cours » (projet NLP darija, Cold Chain)
- Frise des stages ; vie étudiante (responsabilités, événements) et galerie défilante ; certifications & attestations
- QR code vers le portfolio (régénéré à chaque build ; le PNG est dans `public/qr-portfolio.png`) et téléchargement du CV EN / FR
- Mise en page propre à l'impression (Ctrl + P)
- SEO : balises meta, Open Graph, données structurées, favicon
- Accessibilité : navigation au clavier, contrastes, `prefers-reduced-motion` respecté

## 5. Structure

```
├── .github/workflows/deploy.yml   # déploiement automatique sur GitHub Pages
├── public/                        # favicon, image Open Graph, QR code PNG
├── scripts/generate-qr.mjs        # génère le QR code avant chaque build
├── src/
│   ├── assets/                    # photo, CV, captures, photos d'événements
│   ├── components/                # Navbar, Hero, About, Skills, Projects, ProjectCard, ProjectModal,
│   │                              # InProgress, Experience, Education, Contact, Footer, Lightbox
│   ├── data/                      # TOUT le contenu (profil, textes, projets, compétences, expériences)
│   ├── hooks/                     # apparition au scroll, section active
│   ├── i18n.jsx                   # gestion de la langue
│   ├── App.jsx · main.jsx · index.css
├── index.html · vite.config.js · tailwind.config.js · package.json
```
