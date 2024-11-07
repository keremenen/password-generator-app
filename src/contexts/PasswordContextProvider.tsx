import { createContext, useState } from 'react'

type PasswordContextType = {
  passwordLength: number
  setPasswordLength: (length: number) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const PasswordContext = createContext<PasswordContextType | null>(null)

export default function PasswordContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [passwordLength, setPasswordLength] = useState(10)

  return (
    <PasswordContext.Provider value={{ passwordLength, setPasswordLength }}>
      {children}
    </PasswordContext.Provider>
  )
}
