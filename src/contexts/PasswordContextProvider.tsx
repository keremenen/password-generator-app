import { createContext, useMemo, useState } from 'react'

type PasswordContextType = {
  passwordLength: number
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
}

// eslint-disable-next-line react-refresh/only-export-components
export const PasswordContext = createContext<PasswordContextType | null>(null)

export default function PasswordContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // PASSWORD LENGTH
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
    // Generate password
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

    let generatedPassword = ''

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length)
      generatedPassword += characterPool[randomIndex]
    }

    console.log(generatedPassword) // Replace this with your desired action
  }

  return (
    <PasswordContext.Provider
      value={{
        passwordLength,
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

const PASSWORD_LENGTH_SCORES = {
  UNSET: 0,
  TOO_WEAK: 0,
  WEAK: 1,
  MEDIUM: 2,
  STRONG: 3,
}

const CHARACTER_TYPE_SCORES = {
  UPPERCASE: 1,
  LOWERCASE: 1,
  NUMBERS: 1,
  SYMBOLS: 2,
}

const PASSWORD_STRENGTH_THRESHOLDS = {
  TOO_WEAK: 0,
  WEAK: 4,
  MEDIUM: 6,
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

  if (length >= 16) {
    score += PASSWORD_LENGTH_SCORES.STRONG
  } else if (length >= 11) {
    score += PASSWORD_LENGTH_SCORES.MEDIUM
  } else if (length >= 6) {
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
