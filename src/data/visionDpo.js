import { CURRENT_YEAR } from './year';

const Y = CURRENT_YEAR;
const PREV = Y - 1;

export const visionDpoIntro = `En ${Y}, déployer une IA en entreprise n'est plus un projet technique isolé. C'est un projet qui croise le RGPD, l'AI Act, NIS2, la stratégie business et la conduite du changement. Voici comment je vois les vrais enjeux — et comment j'y réponds en tant que consultant.`;

export const visionDpoBlocks = [
  {
    id: 'convergence',
    title: 'La fin des silos : RGPD × NIS2 × AI Act',
    position: `Traiter ces trois textes séparément est une erreur coûteuse. En ${Y}, une faille de sécurité est presque toujours une violation de données personnelles. Un système d'IA qui traite des données personnelles déclenche des obligations RGPD, AI Act et potentiellement NIS2 en parallèle. Le consultant doit porter une vision unifiée de la conformité — pas trois projets en silos.`,
    approach: `Mon double socle juridique et technique me permet de piloter un référentiel de conformité transversal : un seul registre des risques, une DPIA qui intègre nativement les exigences IA et cyber, une chaîne d'alerte unique. Moins de redondance, plus de cohérence, des coûts maîtrisés.`,
    icon: '⚖️',
  },
  {
    id: 'ia',
    title: 'IA en entreprise : encadrer sans freiner',
    position: `L'AI Act classe les systèmes par niveau de risque et impose transparence, traçabilité et supervision humaine. Mais le vrai défi opérationnel, c'est la Shadow AI : les équipes utilisent déjà ChatGPT, Copilot ou des outils internes sans que la direction ne le sache. Interdire ne fonctionne pas. Encadrer, cartographier et former, oui.`,
    approach: `Je cartographie les usages IA déclarés et non déclarés, j'établis une politique IA proportionnée (quelles données, quels outils, quelles validations), et je forme les équipes pour transformer un risque en levier maîtrisé. L'objectif n'est jamais de bloquer l'innovation — c'est de la rendre conforme et traçable.`,
    icon: '🤖',
  },
  {
    id: 'security-compliance',
    title: 'Sécurité & conformité : deux horloges, un seul profil',
    position: `NIS2 impose des audits de sécurité stricts et des notifications d'incidents en 24h. Le RGPD exige une notification à la CNIL en 72h. En cas de cyberattaque, deux horloges tournent en parallèle. Si les équipes sécurité et conformité ne parlent pas le même langage ou ne partagent pas les mêmes outils, l'organisation perd un temps critique — et s'expose à des sanctions des deux côtés.`,
    approach: `Avoir un profil technique (full-stack, réseaux, Linux) en plus du socle juridique me permet de dialoguer directement avec les équipes sécurité sans interprète. Je peux participer à l'analyse d'un incident, comprendre un log, évaluer une vulnérabilité — et qualifier simultanément l'impact RGPD. C'est ce binôme intégré dans un même profil qui fait la différence.`,
    icon: '🔗',
  },
  {
    id: 'sanctions',
    title: `${PREV} : la conformité papier est morte`,
    position: `La CNIL a dépassé le milliard d'euros d'amendes cumulées en ${PREV}. Google, TikTok, Shein — les sanctions ne visent plus seulement les géants. Les premiers audits NIS2 ont démarré début ${Y}. Le message est clair : la conformité documentaire ne suffit plus. Les régulateurs veulent des preuves opérationnelles, des mesures techniques vérifiables, et une gouvernance qui fonctionne réellement.`,
    approach: `Mon approche est celle d'un praticien terrain : registre des traitements vivant (pas un fichier Excel figé), DPIA actualisées, politique de purge automatisée, MFA systématique, formation continue des équipes. La conformité n'est pas un livrable ponctuel — c'est un système de gestion continu. Et c'est en situations réelles que j'ai construit cette discipline.`,
    icon: '🎯',
  },
  {
    id: 'business',
    title: 'La conformité comme avantage concurrentiel',
    position: `Trop de dirigeants voient encore la conformité comme un frein. En réalité, une entreprise conforme est une entreprise fiable — et dans un contexte B2B, c'est un différenciateur commercial. Les appels d'offres intègrent désormais des clauses RGPD, AI Act et NIS2. Un client qui audite votre conformité et trouve un dispositif solide vous choisira plutôt qu'un concurrent qui improvise.`,
    approach: `Je positionne la conformité comme un investissement, pas comme un coût. Chaque DPIA, chaque politique de sécurité, chaque formation est un actif réutilisable qui renforce la crédibilité de l'organisation. Mon expérience de 15 ans en pilotage de projets et en relation client me permet de porter ce discours au niveau business — pas seulement réglementaire.`,
    icon: '📈',
  },
];

export const visionDpoConclusion = `Le consultant de ${Y} n'est ni un juriste pur, ni un technicien pur. C'est un profil hybride capable de lire un règlement européen le matin et d'analyser une intégration technique l'après-midi. C'est exactement le profil que j'ai construit — méthodiquement, sur 15 ans de terrain et trois diplômes complémentaires. Si cette vision résonne avec vos enjeux, parlons-en.`;