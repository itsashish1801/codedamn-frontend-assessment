import User from '@/interfaces/user';
import projects from './projects';
import playgrounds from './playgrounds';
import certificates from './certificates';
import educations from './educations';
import workExperiences from './workExperiences';
import languages from './languages';
import technologies from './technologies';
import socialLinks from './socialLinks';

const user: User = {
  fullName: 'Ashish Sharma',
  profileImage:
    'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852540/codedamn-frontend-assessment/me_qdv2oy.webp',
  bio: 'Intrigued being, Designer & Frontend Engineer.',
  location: 'Ranchi, India',
  level: 5,
  currentStreak: 10,
  notificationCount: 2,
  profession: 'Student',
  dateOfBirth: '01/08/2001',
  isPro: true,
  lookingForJob: true,
  gender: 'Male',
  socialLinks: socialLinks,
  visibility: { followersAndFollowing: true, xp: true, achievements: true },
  stats: {
    currentLeague: 'Intermediate',
    experiencePoints: 1200,
    longestStreak: 23,
    karmaPoints: 120,
  },
  projects: projects,
  playgrounds: playgrounds,
  certificates: certificates,
  about: `I'm Ashish, a software engineer based in Ranchi. I like writing code and designing beautifuly simple things and I love what I do. Learning software engineering on my own, which is challenging time to time but I am enjoying this process.

  A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done.`,
  educations: educations,
  workExperiences: workExperiences,
  interests: [
    'Programming',
    'Design',
    'Technology',
    'Travelling',
    'Philosophy',
  ],
  languages: languages,
  techSkills: technologies,
};

export default user;
