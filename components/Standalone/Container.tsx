import clsx from 'clsx';
import Container from '@/interfaces/container';

function Container({ children, className }: Container) {
  return <div className={clsx('container mx-auto', className)}>{children}</div>;
}

export default Container;
