import { Checkbox } from '@/components/ui/checkbox'
import { usePasswordContext } from '@/lib/utils'

export default function PasswordOtpions() {
  const {
    // setIsIncludeLowercase,
    // setIsIncludeNumbers,
    handleToggleIncludeUppercase,
    // setIsIncludeSymbols,
    // setIsIncludeUppercase,
  } = usePasswordContext()

  const passwordOptions = [
    {
      id: 'uppercaseLetters',
      label: 'Include Uppercase Letters',
      handleClick: handleToggleIncludeUppercase,
    },
    {
      id: 'lowercaseLetters',
      label: 'Include Lowercase Letters',
      // handleClick: setIsIncludeLowercase,
    },
    {
      id: 'numbers',
      label: 'Include Numbers',
      // handleClick: setIsIncludeNumbers,
    },
    {
      id: 'symbols',
      label: 'Include Symbols',
      // handleClick: setIsIncludeSymbols,
    },
  ]

  return (
    <ul className='mb-8 flex flex-col gap-y-4 md:gap-y-5'>
      {passwordOptions.map(({ id, label, handleClick }) => (
        <li key={id} className='flex items-start' onClick={handleClick}>
          <Checkbox id={id} onClick={(e) => e.stopPropagation()} />
          <label htmlFor={id} className='cursor-pointer pl-5 md:pl-6'>
            {label}
          </label>
        </li>
      ))}
    </ul>
  )
}
