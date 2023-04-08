import { ReactElement } from 'react';
import Sidebar from '@/components/Form/Sidebar';

function LayoutWithSidebar({ children }: { children: ReactElement }) {
  return (
    <div className='flex py-16'>
      <Sidebar />
      {children}
    </div>
  );
}

export default LayoutWithSidebar;
