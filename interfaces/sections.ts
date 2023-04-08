export default interface BasicDetails {
  name: string;
  bio: string;
  location: string;
  isPro: boolean;
  lookingForJob: boolean;
}

export interface SocialLink {
  name: string;
  image: string;
  href: string;
}

export interface Stats {
  longestStreak: number;
  experiencePoints: number;
  currentLeague: string;
  karmaPoints: number;
}

export interface Visibility {
  followersAndFollowing: boolean;
  xp: boolean;
  achievements: boolean;
}

export interface Project {
  title: string;
  image: string;
  technologies: Technology[];
  friends?: Friend[];
}

export interface Playground {
  title: string;
  lastModified: number;
  technology: Technology;
  friends: Friend[];
}

export interface Certificate {
  title: string;
  issuedOn: string;
  href: string;
  technology: Technology;
}

export interface WorkExperience {
  role: string;
  employer: string;
  employerImage: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
  responsibilities?: string[];
}

export interface Education {
  institutionName: string;
  institutionImage: string;
  institutionLocation: string;
  degree?: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Technology {
  name: string;
  image: string;
}

export interface Language {
  name: string;
  flagImage: string;
}

export interface Friend {
  name: string;
  image: string;
}

export interface SectionHeader {
  title: string;
  linkText?: string;
  href?: string;
}

export interface Navbar {
  currentstreak: number;
  notificationCount: number;
  image: string;
  imageAlt: string;
  level: number;
}
