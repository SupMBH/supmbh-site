import { CURRENT_YEAR } from './year';

export const presentation = `Je combine deux expertises rares dans le même profil : développement full-stack (Python, JavaScript, React, Node.js) et maîtrise du droit de la donnée (RGPD, AI Act, NIS2). J'automatise vos workflows tout en garantissant leur conformité juridique dès le premier jour. 15 ans de terrain multi-acteurs — industrie internationale, retail national, formation d'équipes — m'ont forgé une vision opérationnelle de la conformité et de la transformation digitale.`;

export const expertises = [
  {
    id: 'ai-automation',
    title: 'Automatisation IA & Intégrations',
    icon: '🤖',
    desc: "Conception de workflows automatisés intégrant des LLMs (Claude, GPT) avec vos outils métier : CRM, email, bases de données. Chatbots intelligents, agents IA, automatisation de qualification de leads et de traitement documentaire.",
    skills: [
      'Python · n8n · Make.com',
      'Claude API · OpenAI API',
      'Chatbots & agents IA',
      'Prompt Engineering',
      'API Integration · Webhooks',
      'Qualification de leads',
      'Traitement documentaire',
      'Automatisation no-code',
    ],
  },
  {
    id: 'gdpr-compliance',
    title: 'Conformité RGPD & AI Act',
    icon: '🛡️',
    desc: "Audits de conformité, rédaction de DPIA, politiques de confidentialité, registres de traitements. Spécialisation sur le déploiement d'IA conforme en Europe : évaluation des risques, documentation AI Act, garanties opérationnelles.",
    skills: [
      'RGPD · AI Act · NIS2',
      'DPIA & analyses de risques',
      'Registres de traitements',
      'Politiques de confidentialité',
      'Audits de conformité',
      'Data Processing Agreements',
      'Certification CNIL',
      'Shadow AI & gouvernance',
    ],
  },
  {
    id: 'fullstack-dev',
    title: 'Développement Full-Stack',
    icon: '💻',
    desc: "Développement d'applications web et d'intégrations techniques. Spécialisation en intégration d'APIs, webhooks, et microservices. Approche orientée business : besoins client, efficacité opérationnelle, maintenance durable.",
    skills: [
      'Python · JavaScript',
      'React · Node.js',
      'MongoDB · SQL',
      'REST APIs · Webhooks',
      'Git / GitHub',
      'Linux · Bash',
      'Testing (Jest, E2E)',
      'Architecture logicielle',
    ],
  },
];

export const experiences = [
  {
    title: 'Consultant AI Automation & Conformité RGPD',
    org: 'Indépendant',
    period: "2023 – Aujourd'hui",
    bullets: [
      'Conception et déploiement d\'automatisations IA pour PME : qualification de leads, génération documentaire, traitement de données',
      'Conseil RGPD et AI Act : audits, DPIA, politiques de confidentialité, conformité des déploiements IA en Europe',
      'Formations IA & Prompt Engineering pour équipes techniques et métier · sensibilisation cybersécurité',
      'Développement full-stack (Python, React, Node.js) avec focus API integration et automatisation no-code (n8n, Make.com)',
    ],
  },
  {
    title: 'Chef de Projet IT & Responsable Conformité',
    org: 'F.K.D',
    period: '2017 – 2022',
    bullets: [
      'Déploiement ERP complet (production, RH, stocks, comptabilité) en environnement industriel international',
      'Réduction de 10% des pertes matière via optimisation des processus et tableaux de bord Power BI',
      "Définition de la politique de sécurité SI, documentation des traitements, gestion des accès et incidents",
      'Coordination multi-acteurs : directions, équipes techniques, prestataires · conduite du changement',
    ],
  },
  {
    title: 'Conseiller Projets Maison Complète',
    org: 'Leroy Merlin',
    period: '2010 – 2017',
    bullets: [
      '7M€+ de chiffre d\'affaires généré sur projets de rénovation et construction de maisons complètes',
      '#1 France fidélisation 2 années consécutives sur 30 000+ employés',
      'Interface unique client orchestrant tous les corps de métier (gros œuvre, second œuvre, finitions)',
      'Consultative selling haut de gamme sur projets complexes multi-parties prenantes',
    ],
  },
];

export const formations = [
  {
    title: 'Développeur Concepteur Logiciel',
    org: 'OpenClassrooms · Bac+4 · Université accréditée WSCUC (même organisme que Stanford, UC Berkeley, UCLA)',
    date: '2024',
  },
  {
    title: 'Développeur Intégrateur Web',
    org: 'OpenClassrooms · Bac+2 · Université accréditée WSCUC (même organisme que Stanford, UC Berkeley, UCLA)',
    date: '2023',
  },
  {
    title: 'IEJ – Droit du numérique et de la Propriété intellectuelle',
    org: 'Université Aix-Marseille 3 · Bac+5',
    date: '2005',
  },
  {
    title: 'Maîtrise Droit – Carrières judiciaires et sciences criminelles',
    org: 'Université Aix-Marseille 3 · Bac+4',
    date: '2004',
  },
  {
    title: 'Certification RGPD – CNIL',
    org: 'CNIL · 6/6 modules validés · scores : 100/100/100/93/90/90 %',
    date: '04/2026',
  },
];

export const techSkills = [
  'Python', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'SQL',
  'Claude API', 'OpenAI API', 'n8n', 'Make.com', 'Zapier',
  'REST APIs', 'Webhooks', 'Git / GitHub', 'Linux', 'Bash',
  'Prompt Engineering', 'Chatbot Development', 'Web Scraping',
  'Power BI', 'Power Automate', 'Microsoft 365',
  'ISO 27001', 'DevSecOps', 'Cloud',
  'SEO / WCAG',
];

export const languages = [
  { lang: 'Français', level: 'Natif', pct: 100 },
  { lang: 'Anglais', level: 'C1-C2', pct: 85 },
  { lang: 'Italien', level: 'B1-B2', pct: 55 },
];

export const differentiators = [
  {
    title: 'Double compétence rare : Code + Droit',
    body: "Bac+5 Droit du numérique + développement full-stack — profil structurellement rare. Je parle aux DSI, aux juristes et aux métiers sans interprète et sans malentendu.",
  },
  {
    title: 'Résultats mesurables prouvés',
    body: "7M€+ de CA documenté, classé #1 sur 30 000+ employés chez Leroy Merlin 2 années consécutives. ERP complet déployé en environnement industriel international. Je livre des résultats, pas des slides.",
  },
  {
    title: 'Conformité comme accélérateur, pas frein',
    body: "Conseil RGPD et AI Act conçu comme investissement business. Chaque livrable renforce la crédibilité commerciale de l'organisation. La conformité ouvre des marchés, elle ne les ferme pas.",
  },
];

export const navLinks = [
  { href: '#about', label: 'Profil' },
  { href: '#expertise', label: 'Expertises' },
  { href: '#vision-dpo', label: 'Vision' },
  { href: '#experience', label: 'Parcours' },
  { href: '#formations', label: 'Formations' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
];


export const heroHook = `La plupart des freelances en automatisation IA construisent vite. Je construis vite, et sans risque juridique pour votre activité.`;

export const uiLabels = {
  sectionProfile: 'Profil',
  sectionExpertise: "Domaines d'expertise",
  sectionVision: "Mon regard sur l'IA & la conformité",
  sectionExperience: 'Parcours professionnel',
  sectionFormations: 'Formations & Certifications',
  sectionSkills: 'Compétences techniques',
  languagesLabel: 'Langues',
  differentiatorsLabel: 'Atouts différenciants',
  visionIssueLabel: "L'enjeu",
  visionApproachLabel: 'Mon approche',
  contactMe: 'Me contacter',
  viewExpertise: 'Voir mes expertises',
  viewUpwork: 'Voir mon profil Upwork',
  letWorkTogether: 'Travaillons ensemble',
  emailPrefix: '✉',
  phonePrefix: '☎',
  linkedInStatus: 'Compte clôturé',
  linkedInWhy: 'Pourquoi ?',
  linkedInReduce: 'Réduire',
  linkedInIntro: 'Principaux incidents documentés sur LinkedIn :',
  linkedInNotice: "J'ai fait le choix de quitter LinkedIn après une analyse des risques inhérents à la plateforme. En tant que consultant spécialisé en conformité RGPD et protection des données, cette décision est cohérente avec mes convictions.",
  linkedIn2021: "Scraping massif via exploitation d'API : 700 millions de profils exposés (noms, emails, téléphones, parcours professionnels). LinkedIn a qualifié l'incident de « scraping » et non de « breach », mais les données ont été mises en vente sur des forums.",
  linkedIn2024: "Sanctions de régulateurs européens pour usage abusif des données publicitaires. La CNIL a sanctionné une société tierce pour scraping de profils, confirmant que même des données « publiques » nécessitent des garanties strictes.",
  linkedIn2025: "Découverte d'une base MongoDB exposée contenant 4,3 milliards d'enregistrements professionnels, incluant des données issues de LinkedIn : noms, postes, emails, téléphones, historiques d'emploi.",
  linkedInConclusion: "Ces incidents illustrent un risque structurel : sur une plateforme où les données professionnelles sont publiques par design, la surface d'attaque pour le phishing ciblé, l'ingénierie sociale et l'usurpation d'identité professionnelle reste élevée. Limiter son exposition est une mesure d'hygiène numérique élémentaire.",
  footerMain: 'Antoine Naget — AI Automation · GDPR Compliance · Full-Stack Development',
  footerCredit: 'Site conçu et développé par Antoine Naget',
};