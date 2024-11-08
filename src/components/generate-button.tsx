import ArrowRightIcon from '@/assets/icon-arrow-right.svg?react'
import { usePasswordContext } from '@/lib/utils'

export default function GenerateButton() {
  const { handleGeneratePassword, isAnyOptionToggled } = usePasswordContext()

  return (
    <button
      onClick={handleGeneratePassword}
      disabled={!isAnyOptionToggled}
      className='flex h-[3.5rem] w-full items-center justify-center gap-x-4 border-2 border-neon-green bg-neon-green uppercase text-dark-grey transition-colors duration-200 hover:bg-transparent hover:text-neon-green focus-visible:bg-transparent focus-visible:text-neon-green focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-neon-green disabled:text-dark-grey disabled:opacity-50 md:h-[4.0625rem] md:gap-x-6'
    >
      Generate
      <ArrowRightIcon />
    </button>
  )
}
