import { SocialLink } from '@/interfaces/sections';

import { SocialLink as SocialLinkComponent } from '../../Standalone/Links';

function SocialLinks({ socials }: { socials: SocialLink[] }) {
  return (
    <div className='flex gap-4'>
      {socials.map((social) => (
        <SocialLinkComponent
          key={social.name}
          name={social.name}
          href={social.href}
          image={social.image}
        />
      ))}
    </div>
  );
}

export default SocialLinks;
