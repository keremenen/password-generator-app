import { createContext, useState } from 'react'

type PasswordContextType = {
  passwordLength: number
  passwordStrength: string
  setPasswordLength: (length: number) => void
  setIsIncludeUppercase: (value: boolean) => void
  setIsIncludeLowercase: (value: boolean) => void
  setIsIncludeNumbers: (value: boolean) => void
  setIsIncludeSymbols: (value: boolean) => void
  handleToggleIncludeUppercase: () => void
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
  const passwordStrength = calculatePasswordStrength(
    passwordLength,
    isIncludeUppercase,
    isIncludeLowercase,
    isIncludeNumbers,
    isIncludeSymbols
  )

  console.log(isIncludeUppercase)

  const handleToggleIncludeUppercase = () => {
    setIsIncludeUppercase((prevState) => !prevState)
  }

  return (
    <PasswordContext.Provider
      value={{
        passwordLength,
        setPasswordLength,
        handleToggleIncludeUppercase,
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
): string {
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
  if (score <= 2) {
    return 'Too Weak'
  } else if (score <= 4) {
    return 'Weak'
  } else if (score <= 6) {
    return 'Medium'
  } else {
    return 'Strong'
  }
}
