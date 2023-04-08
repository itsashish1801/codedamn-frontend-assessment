import User from '@/interfaces/user';

import Stats from './Stats';
import Certificates from './Certificates';
import Projects from './Projects';
import Playgrounds from './Playgrounds';

function PortfolioPanel({ user }: { user: User }) {
  return (
    <>
      <Stats stats={user.stats} />
      <Projects projects={user.projects} />
      <Playgrounds playgrounds={user.playgrounds} />
      <Certificates certificates={user.certificates} />
    </>
  );
}

export default PortfolioPanel;
