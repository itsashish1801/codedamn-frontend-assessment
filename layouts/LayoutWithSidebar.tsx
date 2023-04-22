import { ReactElement } from 'react';
import Sidebar from '@/components/Form/Sidebar';

function LayoutWithSidebar({ children }: { children: ReactElement }) {
  return (
    <div className='flex flex-col px-5 py-10 md:py-16 lg:px-0 md:flex-row'>
      <Sidebar />
      {children}
    </div>
  );
}

export default LayoutWithSidebar;
