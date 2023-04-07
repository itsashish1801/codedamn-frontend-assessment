import { Project } from '@/interfaces/sections';
import friends from './friends';
import technologies from './technologies';

const projects: Project[] = [
  {
    title: 'Personal blogging site',
    image:
      'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852541/codedamn-frontend-assessment/portfolio_r8d12y.svg',
    technologies: [technologies.at(0)!, technologies.at(2)!],
    friends: friends,
  },
  {
    title: 'Catlab - for CAT preparation',
    image:
      'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852541/codedamn-frontend-assessment/catlab_yuadrn.svg',
    technologies: [technologies.at(4)!, technologies.at(5)!],
    friends: friends,
  },
  {
    title: 'Mark my map',
    image:
      'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852541/codedamn-frontend-assessment/markmymap_vwb395.svg',
    technologies: [technologies.at(0)!, technologies.at(2)!],
    friends: friends,
  },
  {
    title: 'QuikkyUI - Component Libray',
    image:
      'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852541/codedamn-frontend-assessment/quikkyui_ox4tzp.svg',
    technologies: [technologies.at(3)!, technologies.at(4)!],
    friends: friends,
  },
];

export default projects;
