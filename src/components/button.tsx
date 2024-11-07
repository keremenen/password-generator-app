import ArrowRightIcon from '@/assets/icon-arrow-right.svg?react'

type ButtonProps = {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className='flex h-[65px] w-full items-center justify-center gap-6 border-2 border-neon-green bg-neon-green uppercase text-dark-grey transition-colors duration-200 hover:bg-transparent hover:text-neon-green focus-visible:bg-transparent focus-visible:text-neon-green focus-visible:outline-none'>
      {children}
      <ArrowRightIcon fill='red' />
    </button>
  )
}
