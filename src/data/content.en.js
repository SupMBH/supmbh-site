import { CURRENT_YEAR } from './year';

export const presentation = `I combine two rare skill sets in the same profile: full-stack development (Python, JavaScript, React, Node.js) and deep expertise in data protection law (GDPR, AI Act, NIS2). I automate your workflows while making sure they stay legally compliant from day one. 15 years of field experience — international industry, national retail, team training — gave me an operational view of compliance and digital transformation.`;

export const expertises = [
  {
    id: 'ai-automation',
    title: 'AI Automation & Integration',
    icon: '🤖',
    desc: "Design of automated workflows integrating LLMs (Claude, GPT) with your business tools: CRM, email, databases. Intelligent chatbots, AI agents, automation of lead qualification and document processing.",
    skills: [
      'Python · n8n · Make.com',
      'Claude API · OpenAI API',
      'Chatbots & AI agents',
      'Prompt Engineering',
      'API Integration · Webhooks',
      'Lead qualification',
      'Document processing',
      'No-code automation',
    ],
  },
  {
    id: 'gdpr-compliance',
    title: 'GDPR & AI Act Compliance',
    icon: '🛡️',
    desc: "Compliance audits, DPIA drafting, privacy policies, records of processing. Specialized in compliant AI deployment in Europe: risk assessments, AI Act documentation, operational safeguards.",
    skills: [
      'GDPR · AI Act · NIS2',
      'DPIA & risk analysis',
      'Records of processing',
      'Privacy policies',
      'Compliance audits',
      'Data Processing Agreements',
      'CNIL Certified',
      'Shadow AI governance',
    ],
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Development',
    icon: '💻',
    desc: "Web application development and technical integrations. Specialized in API integration, webhooks, and microservices. Business-oriented approach: client needs, operational efficiency, sustainable maintenance.",
    skills: [
      'Python · JavaScript',
      'React · Node.js',
      'MongoDB · SQL',
      'REST APIs · Webhooks',
      'Git / GitHub',
      'Linux · Bash',
      'Testing (Jest, E2E)',
      'Software architecture',
    ],
  },
];

export const experiences = [
  {
    title: 'AI Automation & GDPR Compliance Consultant',
    org: 'Independent',
    period: '2023 – Present',
    bullets: [
      'Design and deployment of AI automations for SMEs: lead qualification, document generation, data processing',
      'GDPR and AI Act consulting: audits, DPIA, privacy policies, compliant AI deployments in Europe',
      'AI & Prompt Engineering training for technical and business teams · cybersecurity awareness',
      'Full-stack development (Python, React, Node.js) with focus on API integration and no-code automation (n8n, Make.com)',
      '15 years of prior experience in international industrial and retail project management — ERP deployments, multi-stakeholder coordination, change management',
    ],
  },
  {
    title: 'Senior Home Project Advisor — Full Home Renovation & Construction',
    org: 'Leroy Merlin',
    period: '2010 – 2017',
    bullets: [
      '€7M+ in total project revenue on full home renovation and construction projects',
      'Ranked #1 in France for 2 consecutive years on customer loyalty, out of 30,000+ employees',
      'Single point of contact orchestrating every trade (structural work, carpentry, electrical, plumbing, finishing)',
      'High-end consultative selling on complex multi-stakeholder projects',
    ],
  },
];

export const formations = [
  {
    title: 'Software Development — Bachelor\'s Degree',
    org: 'OpenClassrooms · WSCUC-accredited university (same body as Stanford, UC Berkeley, UCLA)',
    date: '2024',
  },
  {
    title: 'Web Development — Associate\'s Degree',
    org: 'OpenClassrooms · WSCUC-accredited university (same body as Stanford, UC Berkeley, UCLA)',
    date: '2023',
  },
  {
    title: 'Master\'s in Digital Law & Intellectual Property',
    org: 'University of Aix-Marseille',
    date: '2005',
  },
  {
    title: 'Master\'s in Law — Judicial Careers & Criminal Sciences',
    org: 'University of Aix-Marseille',
    date: '2004',
  },
  {
    title: 'GDPR Certification — CNIL',
    org: 'CNIL (French Data Protection Authority) · 6/6 modules validated · scores: 100/100/100/93/90/90%',
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
  { lang: 'French', level: 'Native', pct: 100 },
  { lang: 'English', level: 'Fluent', pct: 85 },
  { lang: 'Italian', level: 'Conversational', pct: 55 },
];

export const differentiators = [
  {
    title: 'Rare dual expertise: Code + Law',
    body: "Master's in Digital Law + full-stack development — a structurally rare profile. I speak to engineers, lawyers, and business teams without translators and without misunderstandings.",
  },
  {
    title: 'Proven measurable results',
    body: "€7M+ in documented revenue, ranked #1 out of 30,000+ employees at Leroy Merlin for 2 consecutive years. Full ERP deployed in international industrial environment. I deliver results, not slides.",
  },
  {
    title: 'Compliance as accelerator, not brake',
    body: "GDPR and AI Act consulting designed as business investment. Every deliverable strengthens the commercial credibility of your organization. Compliance opens markets — it doesn't close them.",
  },
];

export const navLinks = [
  { href: '#about', label: 'Profile' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#vision-dpo', label: 'Vision' },
  { href: '#experience', label: 'Experience' },
  { href: '#formations', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];


export const heroHook = `Most AI automation freelancers build fast systems. I build fast systems that won't get your business fined.`;

export const uiLabels = {
  sectionProfile: 'Profile',
  sectionExpertise: 'Areas of expertise',
  sectionVision: 'My perspective on AI & compliance',
  sectionExperience: 'Professional experience',
  sectionFormations: 'Education & Certifications',
  sectionSkills: 'Technical skills',
  languagesLabel: 'Languages',
  differentiatorsLabel: 'Key differentiators',
  visionIssueLabel: 'The challenge',
  visionApproachLabel: 'My approach',
  contactMe: 'Contact me',
  viewExpertise: 'Explore my expertise',
  viewUpwork: 'View my Upwork profile',
  letWorkTogether: "Let's work together",
  emailPrefix: '✉',
  phonePrefix: '☎',
  linkedInStatus: 'Account closed',
  linkedInWhy: 'Why?',
  linkedInReduce: 'Collapse',
  linkedInIntro: 'Main documented LinkedIn incidents:',
  linkedInNotice: "I've chosen to stay off LinkedIn after analyzing the platform's inherent risks. As a consultant specialized in GDPR compliance and data protection, this decision is consistent with my professional convictions.",
  linkedIn2021: "Massive API scraping exposed 700 million profiles (names, emails, phone numbers, career histories). LinkedIn classified the incident as 'scraping' rather than 'breach', but the data ended up on sale in forums.",
  linkedIn2024: "European regulators sanctioned misuse of advertising data. France's CNIL fined a third-party company for profile scraping, confirming that even 'public' data requires strict safeguards.",
  linkedIn2025: "Discovery of an exposed MongoDB database containing 4.3 billion professional records, including LinkedIn-sourced data: names, positions, emails, phone numbers, employment histories.",
  linkedInConclusion: "These incidents illustrate a structural risk: on a platform where professional data is public by design, the attack surface for targeted phishing, social engineering, and professional identity theft remains high. Limiting one's exposure is basic digital hygiene.",
  footerMain: 'Antoine Naget — AI Automation · GDPR Compliance · Full-Stack Development',
  footerCredit: 'Website designed and developed by Antoine Naget',
};