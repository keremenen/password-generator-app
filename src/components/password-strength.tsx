import { cn, usePasswordContext } from '@/lib/utils'

export default function PasswordStrength() {
  const { passwordStrength } = usePasswordContext()

  return (
    <div className='mb-4 flex min-h-[3.5rem] items-center justify-between bg-very-dark-grey px-4 md:mb-8 md:min-h-[4.5rem] md:px-8'>
      <p className='text-grey'>STRENGTH</p>

      <div className='flex items-center gap-x-4'>
        <p className='text-body uppercase md:text-heading-m'>
          {passwordStrength.label === 'unset' ? '' : passwordStrength.label}
        </p>
        <PasswordStrengthBars />
      </div>
    </div>
  )
}

function PasswordStrengthBars() {
  const {
    passwordStrength: { label },
  } = usePasswordContext()

  const strengthColors = [
    {
      background: 'bg-red',
      border: 'border-red',
    },
    {
      background: 'bg-orange',
      border: 'border-orange',
    },
    {
      background: 'bg-yellow',
      border: 'border-yellow',
    },
    {
      background: 'bg-neon-green',
      border: 'border-neon-green',
    },
  ]

  const getBars = (filledCount: number, colorIndex: number) => {
    return Array.from({ length: 4 }, (_, index) => (
      <StrengthLevelBar
        key={index}
        isFilled={index < filledCount}
        color={index < filledCount ? strengthColors[colorIndex] : undefined}
      />
    ))
  }

  const strengthMap = {
    unset: getBars(0, 0),
    'too weak': getBars(1, 0),
    weak: getBars(2, 1),
    medium: getBars(3, 2),
    strong: getBars(4, 3),
  }

  return <div className='flex gap-x-2'>{strengthMap[label]}</div>
}

type StrengthLevelBarsProps = {
  color?: { background: string; border: string }
  isFilled?: boolean
}

function StrengthLevelBar({ color, isFilled }: StrengthLevelBarsProps) {
  return (
    <span
      className={cn(
        `bg-r block h-7 min-w-[0.625rem] border-2`,
        color && isFilled && `${color.background} ${color.border}`
      )}
    />
  )
}
