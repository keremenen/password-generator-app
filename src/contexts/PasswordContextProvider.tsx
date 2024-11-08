import {
  CHARACTER_TYPE_SCORES,
  PASSWORD_LENGTH_SCORES,
  PASSWORD_LENGTH_TRESHOLDS,
  PASSWORD_STRENGTH_THRESHOLDS,
} from '@/lib/constants'
import { createContext, useMemo, useState } from 'react'

type PasswordContextType = {
  passwordLength: number
  generatedPassword: string
  passwordStrength: {
    label: 'unset' | 'too weak' | 'weak' | 'medium' | 'strong'
    score: number
  }
  setPasswordLength: (length: number) => void
  handleToggleIncludeUppercase: () => void
  handleToggleIncludeLowercase: () => void
  handleToggleIncludeNumbers: () => void
  handleToggleIncludeSymbols: () => void
  handleGeneratePassword: () => void
  isAnyOptionToggled: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const PasswordContext = createContext<PasswordContextType | null>(null)

export default function PasswordContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // PASSWORD
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(0)

  // OPTIONS
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false)
  const [isIncludeLowercase, setIsIncludeLowercase] = useState(false)
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(false)
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(false)

  // PASSWORD STRENGTH
  const passwordStrength = useMemo(() => {
    return calculatePasswordStrength(
      passwordLength,
      isIncludeUppercase,
      isIncludeLowercase,
      isIncludeNumbers,
      isIncludeSymbols
    )
  }, [
    passwordLength,
    isIncludeUppercase,
    isIncludeLowercase,
    isIncludeNumbers,
    isIncludeSymbols,
  ])

  // HANDLERS
  const handleToggleIncludeUppercase = () => {
    setIsIncludeUppercase((prevState) => !prevState)
  }
  const handleToggleIncludeLowercase = () => {
    setIsIncludeLowercase((prevState) => !prevState)
  }
  const handleToggleIncludeNumbers = () => {
    setIsIncludeNumbers((prevState) => !prevState)
  }
  const handleToggleIncludeSymbols = () => {
    setIsIncludeSymbols((prevState) => !prevState)
  }

  const handleGeneratePassword = () => {
    if (
      !isIncludeUppercase &&
      !isIncludeLowercase &&
      !isIncludeNumbers &&
      !isIncludeSymbols
    ) {
      return
    }

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%^&*'

    let characterPool = ''

    if (isIncludeUppercase) characterPool += uppercaseChars
    if (isIncludeLowercase) characterPool += lowercaseChars
    if (isIncludeNumbers) characterPool += numberChars
    if (isIncludeSymbols) characterPool += symbolChars

    // Shuffle character pool
    characterPool = characterPool
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('')

    let generatedPassword = ''

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length)
      generatedPassword += characterPool[randomIndex]
    }

    setGeneratedPassword(generatedPassword) // Replace this with your desired action
  }

  // CHECK IF ANY OPTIONS IS TOGGLED
  const isAnyOptionToggled =
    isIncludeUppercase ||
    isIncludeLowercase ||
    isIncludeNumbers ||
    isIncludeSymbols

  return (
    <PasswordContext.Provider
      value={{
        passwordLength,
        generatedPassword,
        isAnyOptionToggled,
        setPasswordLength,
        handleToggleIncludeUppercase,
        handleToggleIncludeLowercase,
        handleToggleIncludeNumbers,
        handleToggleIncludeSymbols,
        passwordStrength,
        handleGeneratePassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  )
}

function calculatePasswordStrength(
  length: number,
  isIncludeUppercase: boolean,
  isIncludeLowercase: boolean,
  isIncludeNumbers: boolean,
  isIncludeSymbols: boolean
): {
  label: 'unset' | 'too weak' | 'weak' | 'medium' | 'strong'
  score: number
} {
  let score = 0

  if (length === 0) {
    return { label: 'unset', score: PASSWORD_LENGTH_SCORES.UNSET }
  }
  if (length < 6) {
    return { label: 'too weak', score: PASSWORD_LENGTH_SCORES.TOO_WEAK }
  }

  if (length >= PASSWORD_LENGTH_TRESHOLDS.STRONG) {
    score += PASSWORD_LENGTH_SCORES.STRONG
  } else if (length >= PASSWORD_LENGTH_TRESHOLDS.MEDIUM) {
    score += PASSWORD_LENGTH_SCORES.MEDIUM
  } else if (length >= PASSWORD_LENGTH_TRESHOLDS.WEAK) {
    score += PASSWORD_LENGTH_SCORES.WEAK
  }

  // Character type score
  if (isIncludeUppercase) score += CHARACTER_TYPE_SCORES.UPPERCASE
  if (isIncludeLowercase) score += CHARACTER_TYPE_SCORES.LOWERCASE
  if (isIncludeNumbers) score += CHARACTER_TYPE_SCORES.NUMBERS
  if (isIncludeSymbols) score += CHARACTER_TYPE_SCORES.SYMBOLS

  // Determine strength
  if (score == PASSWORD_LENGTH_SCORES.TOO_WEAK) {
    return { label: 'too weak', score }
  } else if (score <= PASSWORD_STRENGTH_THRESHOLDS.WEAK) {
    return { label: 'weak', score }
  } else if (score <= PASSWORD_STRENGTH_THRESHOLDS.MEDIUM) {
    return { label: 'medium', score }
  } else {
    return { label: 'strong', score }
  }
}
