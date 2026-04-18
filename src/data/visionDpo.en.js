import { CURRENT_YEAR } from './year';

const Y = CURRENT_YEAR;
const PREV = Y - 1;

export const visionDpoIntro = `In ${Y}, deploying AI in business is no longer an isolated technical project. It's a project that intersects GDPR, AI Act, NIS2, business strategy, and change management. Here's how I see the real challenges — and how I address them as a consultant.`;

export const visionDpoBlocks = [
  {
    id: 'convergence',
    title: 'The end of silos: GDPR × NIS2 × AI Act',
    position: `Handling these three regulations separately is a costly mistake. In ${Y}, a security breach is almost always a personal data breach. An AI system processing personal data triggers GDPR, AI Act, and potentially NIS2 obligations in parallel. The consultant must bring a unified compliance vision — not three isolated projects.`,
    approach: `My dual legal and technical background allows me to manage a cross-functional compliance framework: one risk register, a DPIA that natively integrates AI and cyber requirements, a single alert chain. Less redundancy, more coherence, controlled costs.`,
    icon: '⚖️',
  },
  {
    id: 'ia',
    title: 'AI in business: frame without slowing down',
    position: `The AI Act classifies systems by risk level and requires transparency, traceability, and human oversight. But the real operational challenge is Shadow AI: teams are already using ChatGPT, Copilot, or internal tools without management's knowledge. Banning doesn't work. Framing, mapping, and training does.`,
    approach: `I map declared and undeclared AI usage, establish a proportionate AI policy (which data, which tools, which validations), and train teams to turn risk into a controlled asset. The goal is never to block innovation — it's to make it compliant and traceable.`,
    icon: '🤖',
  },
  {
    id: 'security-compliance',
    title: 'Security & compliance: two clocks, one profile',
    position: `NIS2 imposes strict security audits and 24-hour incident notifications. GDPR requires notification to authorities within 72 hours. During a cyberattack, two clocks run in parallel. If security and compliance teams don't speak the same language or share the same tools, the organization loses critical time — and exposes itself to sanctions on both fronts.`,
    approach: `Having a technical profile (full-stack, networks, Linux) in addition to the legal foundation allows me to communicate directly with security teams — no translator needed. I can participate in incident analysis, understand a log, assess a vulnerability — and simultaneously qualify GDPR impact. This integrated duo within a single profile is what makes the difference.`,
    icon: '🔗',
  },
  {
    id: 'sanctions',
    title: `${PREV}: paper compliance is dead`,
    position: `The French CNIL exceeded one billion euros in cumulative fines in ${PREV}. Google, TikTok, Shein — sanctions no longer target only tech giants. The first NIS2 audits started in early ${Y}. The message is clear: documentary compliance is no longer enough. Regulators want operational evidence, verifiable technical measures, and governance that actually works.`,
    approach: `My approach is that of a field practitioner: a living records of processing (not a frozen Excel file), up-to-date DPIAs, automated purge policy, systematic MFA, continuous team training. Compliance is not a one-time deliverable — it's a continuous management system. And I built this discipline in real situations, not in an office.`,
    icon: '🎯',
  },
  {
    id: 'business',
    title: 'Compliance as competitive advantage',
    position: `Too many executives still see compliance as a brake. In reality, a compliant company is a trustworthy company — and in a B2B context, that's a commercial differentiator. Tenders now include GDPR, AI Act, and NIS2 clauses. A client who audits your compliance and finds a solid setup will choose you over a competitor who improvises.`,
    approach: `I position compliance as an investment, not a cost. Every DPIA, every security policy, every training session is a reusable asset that strengthens the organization's credibility. My 15 years of project management and client relations experience allows me to bring this message to the business level — not just the regulatory one.`,
    icon: '📈',
  },
];

export const visionDpoConclusion = `The ${Y} consultant is neither a pure lawyer nor a pure technician. It's a hybrid profile capable of reading a European regulation in the morning and analyzing a technical integration in the afternoon. That's exactly the profile I've built — methodically, over 15 years of field experience and three complementary degrees. If this vision resonates with your challenges, let's talk.`;