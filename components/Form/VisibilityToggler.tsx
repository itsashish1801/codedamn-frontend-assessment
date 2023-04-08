import { VisibilityToggler } from '@/interfaces/inputs';
import Toggler from '../Standalone/Toggler';

function VisibilityToggler({ title, description, label }: VisibilityToggler) {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h4 className='font-bold'>{title}</h4>
        <p className='mt-1 text-sm text-zinc-500'>{description}</p>
      </div>
      <Toggler label={label} />
    </div>
  );
}

export default VisibilityToggler;
