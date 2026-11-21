// Stages, vie associative, formation et certifications.

export const internships = [
  {
    when: { en: 'Sep – Oct 2026', fr: 'Sept. – oct. 2026' },
    role: { en: 'Full Stack & AI Developer Intern (remote)', fr: 'Stagiaire développeuse Full Stack & IA (à distance)' },
    org: { en: 'DEKRA Maroc · DEKRA Automotive Maroc network', fr: 'DEKRA Maroc · réseau DEKRA Automotive Maroc' },
    points: {
      en: ['DEKRA Centre Manager: web application that digitalises the daily tasks of a vehicle inspection centre manager', 'AI module: registration card OCR, traffic forecasting, anomaly detection and an assistant, with FastAPI'],
      fr: ["DEKRA Centre Manager : application web qui digitalise les missions quotidiennes d'un chef de centre de contrôle technique", "Module d'IA : OCR de la carte grise, prévision d'affluence, détection d'anomalies et assistant, avec FastAPI"],
    },
  },
  {
    when: { en: 'Feb – Aug 2026', fr: 'Févr. – août 2026' },
    role: { en: 'Software Development Intern (PFA)', fr: 'Stagiaire en développement logiciel (PFA)' },
    org: 'Estatmar · Casablanca',
    points: {
      en: ['Medical Extractor: modular pipeline for medical documents (ingestion, OCR, parsing, normalisation, database)', 'QuoteFlow: quote management platform with Spring Boot, PDF generation and n8n workflows'],
      fr: ['Medical Extractor : pipeline modulaire pour documents médicaux (ingestion, OCR, parsing, normalisation, base de données)', 'QuoteFlow : plateforme de gestion de devis en Spring Boot, génération de PDF et workflows n8n'],
    },
  },
  {
    when: { en: 'Aug 2025', fr: 'Août 2025' },
    role: { en: 'IT Development Intern', fr: 'Stagiaire en développement informatique' },
    org: { en: 'Province of Jerada · Ministry of the Interior', fr: "Province de Jerada · Ministère de l'Intérieur" },
    points: {
      en: ['Requirements analysis and design of a web application for managing public works projects'],
      fr: ["Analyse des besoins et conception d'une application web de gestion des projets de travaux publics"],
    },
  },
  {
    when: { en: 'Aug – Sep 2024', fr: 'Août – sept. 2024' },
    role: { en: 'Software Development Intern', fr: 'Stagiaire en développement logiciel' },
    org: 'Escodeve · Jerada',
    points: {
      en: ['Real-time monitoring application in C with a multi-threaded producer–consumer architecture'],
      fr: ['Application de surveillance en temps réel en C, architecture multi-threadée producteur–consommateur'],
    },
  },
];

// Vie étudiante. kind : 'role' (responsabilités) ou 'event' (événements).
// Chaque activité a un bouton « Voir les détails ». Les photos sont dans la galerie (src/data/gallery.js).
export const activities = [
  {
    id: 'aura',
    short: { en: 'Aura Club', fr: 'Club Aura' },
    kind: 'role',
    when: { en: 'Nov 2024 – Nov 2025', fr: 'Nov. 2024 – nov. 2025' },
    title: { en: 'Treasurer, Aura Club', fr: 'Responsable trésorerie, club Aura' },
    text: { en: 'Annual budget, contributions and event resource planning', fr: 'Budget annuel, cotisations et planification des ressources des événements' },
    points: {
      en: ["Built and followed the club's annual budget", 'Collected contributions and coordinated external funding', 'Prepared financial reports and planned resources for events'],
      fr: ['Élaboration et suivi du budget annuel du club', 'Collecte des cotisations et coordination des financements externes', 'Préparation de rapports financiers et planification des ressources pour les événements'],
    },
  },
  {
    id: 'bde',
    short: { en: 'BDE EHEI', fr: 'BDE EHEI' },
    kind: 'role',
    when: { en: 'Jan 2023 – Jan 2025', fr: 'Janv. 2023 – janv. 2025' },
    title: { en: 'HR Manager, Student Office (BDE EHEI)', fr: 'Responsable RH, BDE EHEI' },
    text: { en: 'Member recruitment and follow-up, internal communication, event coordination', fr: 'Recrutement et suivi des membres, communication interne, coordination des événements' },
    points: {
      en: ['Recruited and followed up active members of the office and project teams', 'Organised meetings to improve internal communication', 'Coordinated projects and events with the different departments'],
      fr: ["Recrutement et suivi des membres actifs du bureau et des équipes projet", 'Organisation de réunions pour fluidifier la communication interne', 'Coordination de projets et d’événements avec les différents départements'],
    },
  },
  {
    id: 'events',
    short: { en: 'Events', fr: 'Événements' },
    kind: 'event',
    when: { en: '2023 – 2025', fr: '2023 – 2025' },
    title: { en: 'Event organisation', fr: "Organisation d'événements" },
    text: { en: 'Organised and coordinated many student events at EHEIM', fr: "Organisation et coordination de nombreux événements étudiants avec l'EHEIM" },
    points: {
      en: ['Organised many student events at EHEIM', 'Planned the resources for the events (Aura Club)', 'Coordinated events with the different departments (BDE)'],
      fr: ["Organisation de nombreux événements étudiants avec l'EHEIM", 'Planification des ressources des événements (club Aura)', 'Coordination des événements avec les différents départements (BDE)'],
    },
  },
  {
    id: 'hackathon',
    short: { en: 'Hackathon', fr: 'Hackathon' },
    kind: 'event',
    when: { en: '20–21 Nov 2026', fr: '20–21 nov. 2026' },
    title: { en: 'Nexus HealthTech Hackathon (1st edition)', fr: 'Hackathon Nexus HealthTech (1re édition)' },
    text: { en: 'Participant, DSM team: MindCare AI project, AI & health track', fr: 'Participante, équipe DSM : projet MindCare AI, thème IA & santé' },
    points: {
      en: ['Hackathon organised by CIRMSS in Oujda', 'MindCare AI project in the Artificial Intelligence & Health track', 'Multidisciplinary team: computer engineering (AI) and medicine', 'Certificate of participation'],
      fr: ['Hackathon organisé par le CIRMSS à Oujda', 'Projet MindCare AI, thème Intelligence Artificielle & Santé', 'Équipe pluridisciplinaire : génie informatique (IA) et médecine', 'Attestation de participation'],
    },
  },
  {
    id: 'medays',
    short: { en: 'Forum', fr: 'Forum' },
    kind: 'event',
    when: { en: 'Forum', fr: 'Forum' },
    title: { en: 'Participant', fr: 'Participante' },
    text: { en: 'Networking with speakers and professionals from many sectors', fr: 'Échanges avec des intervenants et des professionnels de nombreux secteurs' },
    points: {
      en: ['Took part in professional forums', 'Met speakers, decision-makers and professionals from many sectors'],
      fr: ['Participation à des forums professionnels', 'Rencontres avec des intervenants, des décideurs et des professionnels de nombreux secteurs'],
    },
  },
];

export const education = [
  {
    main: true,
    when: '2022 – 2027',
    title: { en: 'State Engineering Degree in Computer Engineering, AI option', fr: "Diplôme d'Ingénieur d'État en Génie Informatique, option IA" },
    text: { en: 'EHEIM, Oujda · 2 years of integrated preparatory classes, then a 3-year engineering cycle', fr: 'EHEIM, Oujda · 2 ans de classes préparatoires intégrées, puis 3 ans de cycle ingénieur' },
  },
  {
    when: '2021 – 2022',
    title: { en: 'Baccalaureate in Physical Sciences, French option', fr: 'Baccalauréat Sciences Physiques, option Français' },
    text: { en: 'Lycée Ezzarktouni, Jerada', fr: 'Lycée qualifiant Ezzarktouni, Jerada' },
  },
];

// Certifications et attestations. image : fichier dans src/assets/certificates/ ; url : lien de vérification ou null.
export const certifications = [
  { image: '01-hackathon-nexus.webp', date: { en: 'Nov 2026', fr: 'Nov. 2026' }, issuer: 'CIRMSS',
    name: { en: 'Certificate of participation · Nexus HealthTech Hackathon', fr: 'Attestation de participation · Hackathon Nexus HealthTech' }, url: null },
  { image: '02-secourisme-aura.webp', date: { en: 'May 2025', fr: 'Mai 2025' }, issuer: "Club Aura & Club O'Medicus",
    name: { en: 'First aid training', fr: 'Formation en secourisme' }, url: null },
  { image: '03-beyond-engineering.webp', date: { en: 'EHEI Oujda', fr: 'EHEI Oujda' }, issuer: 'Club Beyond Engineering',
    name: { en: "Thank-you certificate · conference \"From engineering student to the professional world\"", fr: "Certificat de remerciement · conférence « De l'élève ingénieur au monde professionnel »" }, url: null },
  { image: '04-ehei-leaders-ouled-maamar.webp', date: { en: '2023/2024', fr: '2023/2024' }, issuer: 'Groupe scolaire Ouled Mâamar',
    name: { en: 'Certificate of appreciation · EHEI Leaders educational and solidarity activities', fr: 'Certificat de remerciement · activités éducatives et solidaires d’EHEI Leaders' }, url: null },
];
