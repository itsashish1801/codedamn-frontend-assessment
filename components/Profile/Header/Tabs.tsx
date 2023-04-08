import User from '@/interfaces/user';

import { Tab } from '@headlessui/react';

import { Tag } from '../../Standalone/Tags';
import ResumePanel from '../Resume/ResumePanel';
import PortfolioPanel from '../Portfolio/PortfolioPanel';

const Tabs = ({ user }: { user: User }) => {
  return (
    <Tab.Group as='div' className='mt-10'>
      <Tab.List className='flex gap-6 px-6 py-2 border rounded-lg'>
        <Tab className='rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'>
          {({ selected }) => (
            <div
              className={`px-3 py-2 text-sm font-semibold rounded-lg text-zinc-900 bg-zinc-100 ${
                selected ? 'bg-indigo-100 text-indigo-800' : ''
              }`}
            >
              Portfolio
            </div>
          )}
        </Tab>
        <Tab className='rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'>
          {({ selected }) => (
            <div
              className={`px-3 py-2 text-sm font-semibold rounded-lg text-zinc-900 bg-zinc-100 ${
                selected ? 'bg-indigo-100 text-indigo-800' : ''
              }`}
            >
              Resume
            </div>
          )}
        </Tab>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <PortfolioPanel user={user} />
        </Tab.Panel>
        <Tab.Panel>
          <ResumePanel user={user} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
