import { createContext, useMemo, useState } from 'react'

type PasswordContextType = {
  passwordLength: number
  passwordStrength: {
    label: 'too weak' | 'weak' | 'medium' | 'strong'
    score: number
  }
  setPasswordLength: (length: number) => void
  handleToggleIncludeUppercase: () => void
  handleToggleIncludeLowercase: () => void
  handleToggleIncludeNumbers: () => void
  handleToggleIncludeSymbols: () => void
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

  console.log(passwordStrength)

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
): { label: 'too weak' | 'weak' | 'medium' | 'strong'; score: number } {
  let score = 0
  if (length >= 16) {
    score += 3
  } else if (length >= 11) {
    score += 2
  } else if (length >= 6) {
    score += 1
  }

  // Character type score
  if (isIncludeUppercase) score += 1
  if (isIncludeLowercase) score += 1
  if (isIncludeNumbers) score += 1
  if (isIncludeSymbols) score += 1

  // Determine strength
  if (score == 0) {
    return { label: 'too weak', score }
  } else if (score <= 4) {
    return { label: 'weak', score }
  } else if (score <= 6) {
    return { label: 'medium', score }
  } else {
    return { label: 'strong', score }
  }
}
