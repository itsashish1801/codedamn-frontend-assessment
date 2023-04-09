import { Input, Label, SelectInput } from '@/interfaces/inputs';
import { convertToId } from '@/utils/helperFunctions';
import { Field } from 'formik';

const baseStyles =
  'block w-full text-sm py-3.5 px-3 rounded-lg border border-zinc-200 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-500';

export function Label({ label }: Label) {
  return (
    <label htmlFor={convertToId(label)} className='block text-sm font-semibold'>
      {label}
    </label>
  );
}

export function TextInput({ placeholder, label, error }: Input) {
  const id = convertToId(label);

  return (
    <div>
      <Label label={label} />
      <div className='mt-1'>
        <Field
          name={id}
          id={id}
          placeholder={placeholder}
          className={`${baseStyles} ${error ? 'border-red-600' : ''}`}
        />
      </div>
      <div className='mt-1 text-sm text-red-600'>{error}</div>
    </div>
  );
}

export function TextAreaInput({ placeholder, label }: Input) {
  const id = convertToId(label);

  return (
    <div>
      <Label label={label} />
      <div className='mt-1'>
        <textarea
          name={id}
          id={id}
          placeholder={placeholder}
          className={`${baseStyles} resize-none`}
        ></textarea>
      </div>
    </div>
  );
}

export function DateInput({ label }: Label) {
  return (
    <div>
      <Label label={label} />
      <div className='mt-1'>
        <input type='date' name={label} id={label} className={baseStyles} />
      </div>
    </div>
  );
}
