import { Checkbox } from '@/components/ui/checkbox'

const passwordOptions = [
  { id: 'uppercaseLetters', label: 'Include Uppercase Letters' },
  { id: 'lowercaseLetters', label: 'Include Lowercase Letters' },
  { id: 'numbers', label: 'Include Numbers' },
  { id: 'symbols', label: 'Include Symbols' },
]

export default function PasswordOtpions() {
  return (
    <ul className='mb-8 flex flex-col gap-y-4 md:gap-y-5'>
      {passwordOptions.map(({ id, label }) => (
        <li key={id} className='flex items-start'>
          <Checkbox id={id} />
          <label htmlFor={id} className='cursor-pointer pl-5 md:pl-6'>
            {label}
          </label>
        </li>
      ))}
    </ul>
  )
}
