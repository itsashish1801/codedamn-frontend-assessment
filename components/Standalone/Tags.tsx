import clsx from 'clsx';
import Image from 'next/image';

import { CategoryTag, Tag, TagWithIcon } from '@/interfaces/tags';

export function Tag({
  text,
  variant = 'basic',
  color = 'primary',
  className,
}: Tag) {
  const variantClasses =
    variant === 'basic'
      ? 'rounded-lg font-semibold px-3 py-2 text-zinc-900 bg-zinc-100'
      : 'rounded-[4px] font-semibold py-0.5 px-3 text-sm';

  const colorClasses =
    color === 'primary'
      ? 'bg-sky-100 text-sky-800'
      : 'bg-lime-300 text-zinc-900';

  return (
    <div className={clsx(variantClasses, colorClasses, className)}>
      <span>{text}</span>
    </div>
  );
}

export function TagWithIcon({
  text,
  image,
  height = 20,
  width = 20,
}: TagWithIcon) {
  return (
    <div className='inline-flex items-center py-2 pl-2 pr-3 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-100'>
      <Image src={image} alt={text} height={height} width={width} />
      <span className='ml-2 font-semibold'>{text}</span>
    </div>
  );
}

export function CategoryTag({ category, image, className }: CategoryTag) {
  return (
    <div className='flex items-center'>
      {image && <Image src={image} alt={category} width={20} height={20} />}
      <span className={`${image ? 'ml-2' : ''} text-sm uppercase ${className}`}>
        {category}
      </span>
    </div>
  );
}
