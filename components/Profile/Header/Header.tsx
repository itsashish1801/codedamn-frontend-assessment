import { BookmarkIcon } from '@heroicons/react/24/outline';

import User from '@/interfaces/user';

import Banner from './Banner';
import BasicDetails from './BasicDetails';
import HighlightedSkills from './HighlightedSkills';
import SocialLinks from './SocialLinks';
import { Button, ButtonIcon } from '../../Standalone/Buttons';

function Header({ user }: { user: User }) {
  return (
    <section>
      <div className='pb-8 overflow-hidden rounded-2xl ring-1 ring-zinc-200'>
        <Banner
          image={user.profileImage}
          imageAlt={user.fullName}
          level={user.level}
        />
        <div className='pt-6 pl-48 pr-6 '>
          <BasicDetails
            name={user.fullName}
            bio={user.bio}
            location={user.location}
            isPro={user.isPro}
            lookingForJob={user.lookingForJob}
          />
          <HighlightedSkills skills={user.techSkills} />

          <div className='flex items-center justify-between pt-8 border-t border-zinc-100'>
            <SocialLinks socials={user.socialLinks} />
            <div className='flex items-center gap-4'>
              <ButtonIcon Icon={BookmarkIcon} />
              <Button>Contact</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
