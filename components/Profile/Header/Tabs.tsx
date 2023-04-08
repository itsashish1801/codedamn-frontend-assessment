import User from '@/interfaces/user';

import { Tab } from '@headlessui/react';

import { Tag } from '../../Standalone/Tags';
import ResumePanel from '../Resume/ResumePanel';
import PortfolioPanel from '../Portfolio/PortfolioPanel';

const Tabs = ({ user }: { user: User }) => {
  return (
    <Tab.Group as='div' className='mt-10'>
      <Tab.List className='flex gap-6 px-6 py-2 border rounded-lg'>
        <Tab className='rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700'>
          {({ selected }) => (
            <Tag
              text='Portfolio'
              className={`text-sm ${
                selected ? 'bg-indigo-200 text-indigo-800' : ''
              }`}
            />
          )}
        </Tab>
        <Tab className='rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700'>
          {({ selected }) => (
            <Tag
              text='Resume'
              className={`text-sm ${
                selected ? 'bg-indigo-200 text-indigo-800' : ''
              }`}
            />
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
