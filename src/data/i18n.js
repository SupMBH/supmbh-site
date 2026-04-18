// FR data
import { 
  presentation as presentationFr,
  expertises as expertisesFr,
  experiences as experiencesFr,
  formations as formationsFr,
  techSkills as techSkillsFr,
  languages as languagesFr,
  differentiators as differentiatorsFr,
  navLinks as navLinksFr,
} from './content';
import {
  visionDpoIntro as visionIntroFr,
  visionDpoBlocks as visionBlocksFr,
  visionDpoConclusion as visionConclusionFr,
} from './visionDpo';
import profileFr from './profile';
import { heroHook as heroHookFr, uiLabels as uiLabelsFr } from './content';

// EN data
import {
  presentation as presentationEn,
  expertises as expertisesEn,
  experiences as experiencesEn,
  formations as formationsEn,
  techSkills as techSkillsEn,
  languages as languagesEn,
  differentiators as differentiatorsEn,
  navLinks as navLinksEn,
} from './content.en';
import {
  visionDpoIntro as visionIntroEn,
  visionDpoBlocks as visionBlocksEn,
  visionDpoConclusion as visionConclusionEn,
} from './visionDpo.en';
import profileEn from './profile.en';
import { heroHook as heroHookEn, uiLabels as uiLabelsEn } from './content.en';

// Getters
export const getProfile = (lang) => (lang === 'en' ? profileEn : profileFr);
export const getPresentation = (lang) => (lang === 'en' ? presentationEn : presentationFr);
export const getExpertises = (lang) => (lang === 'en' ? expertisesEn : expertisesFr);
export const getExperiences = (lang) => (lang === 'en' ? experiencesEn : experiencesFr);
export const getFormations = (lang) => (lang === 'en' ? formationsEn : formationsFr);
export const getTechSkills = (lang) => (lang === 'en' ? techSkillsEn : techSkillsFr);
export const getLanguages = (lang) => (lang === 'en' ? languagesEn : languagesFr);
export const getDifferentiators = (lang) => (lang === 'en' ? differentiatorsEn : differentiatorsFr);
export const getNavLinks = (lang) => (lang === 'en' ? navLinksEn : navLinksFr);
export const getVisionIntro = (lang) => (lang === 'en' ? visionIntroEn : visionIntroFr);
export const getVisionBlocks = (lang) => (lang === 'en' ? visionBlocksEn : visionBlocksFr);
export const getVisionConclusion = (lang) => (lang === 'en' ? visionConclusionEn : visionConclusionFr);
export const getHeroHook = (lang) => (lang === 'en' ? heroHookEn : heroHookFr);
export const getUiLabels = (lang) => (lang === 'en' ? uiLabelsEn : uiLabelsFr);