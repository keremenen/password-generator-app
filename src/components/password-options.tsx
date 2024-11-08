import { Checkbox } from '@/components/ui/checkbox'
import { usePasswordContext } from '@/lib/utils'

export default function PasswordOtpions() {
  const {
    handleToggleIncludeUppercase,
    handleToggleIncludeLowercase,
    handleToggleIncludeNumbers,
    handleToggleIncludeSymbols,
    isIncludeLowercase,
    isIncludeNumbers,
    isIncludeSymbols,
    isIncludeUppercase,
  } = usePasswordContext()

  const passwordOptions = [
    {
      id: 'uppercaseLetters',
      label: 'Include Uppercase Letters',
      handleClick: handleToggleIncludeUppercase,
      checked: isIncludeUppercase,
    },
    {
      id: 'lowercaseLetters',
      label: 'Include Lowercase Letters',
      handleClick: handleToggleIncludeLowercase,
      checked: isIncludeLowercase,
    },
    {
      id: 'numbers',
      label: 'Include Numbers',
      handleClick: handleToggleIncludeNumbers,
      checked: isIncludeNumbers,
    },
    {
      id: 'symbols',
      label: 'Include Symbols',
      handleClick: handleToggleIncludeSymbols,
      checked: isIncludeSymbols,
    },
  ]

  return (
    <ul className='mb-8 flex flex-col gap-y-4 md:gap-y-5'>
      {passwordOptions.map(({ id, label, handleClick, checked }) => (
        <li key={id} className='flex items-start'>
          <Checkbox
            id={id}
            onClick={(e) => e.stopPropagation()}
            checked={checked}
          />
          <label
            onClick={handleClick}
            htmlFor={id}
            className='cursor-pointer pl-5 md:pl-6'
          >
            {label}
          </label>
        </li>
      ))}
    </ul>
  )
}
