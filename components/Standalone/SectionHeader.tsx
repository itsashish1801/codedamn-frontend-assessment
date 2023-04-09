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
      <h3 className='text-2xl font-bold'>{title}</h3>
      {linkText && href && (
        <TextLink linkText={linkText} variant={variant} href={href} />
      )}
    </div>
  );
}

export default SectionHeader;
