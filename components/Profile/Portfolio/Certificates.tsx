import Image from 'next/image';

import { Certificate } from '@/interfaces/sections';

import { formatDate } from '@/utils/helperFunctions';

import SectionHeader from '@/components/Standalone/SectionHeader';

function Certificates({ certificates }: { certificates: Certificate[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader
        title='Certificates'
        linkText='Add new certificate'
        href='#'
      />

      <div className='grid grid-cols-2 gap-5 mt-6'>
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            title={certificate.title}
            issuedOn={certificate.issuedOn}
            href={certificate.href}
            technology={certificate.technology}
          />
        ))}
      </div>
    </section>
  );
}

function CertificateCard({ title, issuedOn, technology, href }: Certificate) {
  return (
    <div className='p-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200'>
      <Image
        src={technology.image}
        alt={technology.name}
        width={40}
        height={40}
      />
      <h5 className='mt-6 font-semibold'>{title}</h5>
      <p className='mt-1 text-sm text-zinc-500'>
        Issued on {formatDate(issuedOn, 'long')}
      </p>
      <a
        href={href}
        className='inline-block mt-3 text-sm font-semibold text-zinc-500 hover:underline'
      >
        See credentials
      </a>
    </div>
  );
}

export default Certificates;
