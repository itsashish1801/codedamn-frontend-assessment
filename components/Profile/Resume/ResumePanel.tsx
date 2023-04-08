import User from '@/interfaces/user';

import About from './About';
import WorkExperience from './WorkExperience';
import Education from './Education';
import TechSkills from './TechSkills';
import Interests from './Interests';
import Languages from './Languages';

function ResumePanel({ user }: { user: User }) {
  return (
    <>
      <About about={user.about} />
      <WorkExperience experiences={user.workExperiences} />
      <Education educations={user.educations} />
      <TechSkills techSkills={user.techSkills} />
      <Interests interests={user.interests} />
      <Languages languages={user.languages} />
    </>
  );
}

export default ResumePanel;
