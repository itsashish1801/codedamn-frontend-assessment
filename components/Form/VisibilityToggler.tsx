import { VisibilityToggler } from '@/interfaces/inputs';
import Toggler from '../Standalone/Toggler';
import { convertToId } from '@/utils/helperFunctions';

function VisibilityToggler({ title, description, label }: VisibilityToggler) {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <label htmlFor={convertToId(title)} className='font-bold'>
          {title}
        </label>
        <p className='mt-1 text-sm text-zinc-500'>{description}</p>
      </div>
      <Toggler title={title} label={label} />
    </div>
  );
}

export default VisibilityToggler;
