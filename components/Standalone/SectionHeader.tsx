import { SectionHeader } from '@/interfaces/sections';
import { TextLink } from './Links';

function SectionHeader({
  title,
  linkText,
  href,
  variant = 'primary',
}: SectionHeader) {
  return (
    <div className='flex items-center justify-between'>
      <h3 className='text-xl font-bold sm:text-2xl'>{title}</h3>
      {linkText && href && (
        <TextLink linkText={linkText} variant={variant} href={href} />
      )}
    </div>
  );
}

export default SectionHeader;
