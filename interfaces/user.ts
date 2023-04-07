import {
  Certificate,
  Education,
  Language,
  Playground,
  Project,
  SocialLink,
  Stats,
  Technology,
  Visibility,
  WorkExperience,
} from './sections';

export default interface User {
  fullName: string;
  bio: string;
  location: string;
  profileImage: string;
  level: number;
  currentStreak: number;
  notificationCount: number;
  isPro: boolean;
  lookingForJob: boolean;
  about: string;
  profession: string;
  dateOfBirth: string;
  gender: string;
  socialLinks: SocialLink[];
  visibility: Visibility;
  stats: Stats;
  projects: Project[];
  playgrounds: Playground[];
  certificates: Certificate[];
  workExperiences: WorkExperience[];
  educations: Education[];
  techSkills: Technology[];
  interests: string[];
  languages: Language[];
}
