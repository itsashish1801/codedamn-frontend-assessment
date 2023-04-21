import { WorkExperience } from '@/interfaces/sections';

const workExperiences: WorkExperience[] = [
  {
    role: 'Design Fellow at Headstart',
    employer: 'Headstart Foundation',
    employerImage:
      'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852539/codedamn-frontend-assessment/headstart_jqv59t.png',
    location: 'Bengaluru',
    startDate: '06/11/2021',
    endDate: '01/10/2022',
    description:
      'This job was my first experience working for a company, and I gained a lot of valuable experience and knowledge from it.',
    responsibilities: [
      'Work on different aspects of design like UI/UX, Social media design etc.',
      'Streamlining and simplifying processes through the use of automation.',
      'Develop & Design websites for various events.',
    ],
  },
  {
    role: 'Learning & Personal Projects',
    employer: 'Self',
    employerImage:
      'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852539/codedamn-frontend-assessment/personal_vtjeib.svg',
    location: 'Home',
    startDate: '05/10/2022',
    endDate: '',
    description:
      'Working on side projects to gain experience with technologies like React, Next.js, Tailwind, Typescript, etc, while self-studying software engineering fundamentals such as data structures and algorithms, design patterns & other core concepts.',
  },
];

export default workExperiences;
