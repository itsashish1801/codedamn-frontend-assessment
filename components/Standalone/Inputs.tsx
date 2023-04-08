import { Input, Label, SelectInput } from '@/interfaces/inputs';
import { convertToId } from '@/utils/helperFunctions';

const baseStyles =
  'block w-full text-sm py-3.5 px-3 rounded-lg border-zinc-200 focus:border-zinc-600 focus:ring-zinc-600 placeholder:text-zinc-500';

export function Label({ label }: Label) {
  return (
    <label htmlFor={convertToId(label)} className='block text-sm font-semibold'>
      {label}
    </label>
  );
}

export function TextInput({ placeholder, label }: Input) {
  const id = convertToId(label);

  return (
    <div>
      <Label label={label} />
      <div className='mt-1'>
        <input
          type='text'
          name={id}
          id={id}
          placeholder={placeholder}
          className={baseStyles}
        />
      </div>
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

export function SelectInput({ label, options, placeholder }: SelectInput) {
  const id = convertToId(label);

  return (
    <div>
      <Label label={label} />
      <div className='mt-1'>
        <select
          name={id}
          id={id}
          className={baseStyles}
          defaultValue={placeholder}
        >
          <option value={placeholder} disabled defaultValue={placeholder}>
            {placeholder}
          </option>
          {options.map((option) => (
            <option value={option.toLowerCase()} key={option}>
              {option}
            </option>
          ))}
        </select>
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
