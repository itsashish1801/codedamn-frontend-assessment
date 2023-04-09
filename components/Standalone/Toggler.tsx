import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Label, Toggler } from '@/interfaces/inputs';
import { convertToId } from '@/utils/helperFunctions';

function Toggler({ label, title }: Toggler) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        name={convertToId(title)}
        className={`${enabled ? 'bg-indigo-600' : 'bg-indigo-400'}
          relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-indigo-400 focus-visible:ring-opacity-75`}
      >
        <span className='sr-only'>{label}</span>
        <span
          aria-hidden='true'
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}

export default Toggler;
