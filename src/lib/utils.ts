import { PasswordContext } from '@/contexts/PasswordContextProvider'
import clsx, { ClassValue } from 'clsx'
import { useContext } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function usePasswordContext() {
  const context = useContext(PasswordContext)

  if (context === null) {
    throw new Error(
      'usePasswordContext must be used within a PasswordContextProvider'
    )
  }

  return context
}
