import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function Error({ message }: { message: string }) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='p-4 rounded-md bg-red-50 ring-1 ring-red-100'>
        <div className='flex'>
          <div className='flex-shrink-0'>
            <ExclamationTriangleIcon
              className='w-5 h-5 text-red-400'
              aria-hidden='true'
            />
          </div>
          <div className='ml-3'>
            <h3 className='text-sm font-semibold text-red-800'>
              Failed to load
            </h3>
            <div className='mt-2 text-sm text-red-700'>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Error;
