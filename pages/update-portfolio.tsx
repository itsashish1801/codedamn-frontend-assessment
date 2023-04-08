import { ReactElement } from 'react';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';

function UpdatePortfolio() {
  return <form className='px-16 -mt-12'></form>;
}

UpdatePortfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutWithSidebar>{page}</LayoutWithSidebar>
    </Layout>
  );
};

export default UpdatePortfolio;
