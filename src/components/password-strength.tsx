import { usePasswordContext } from '@/lib/utils'

export default function PasswordStrength() {
  const { passwordStrength } = usePasswordContext()

  return (
    <div className='mb-4 flex min-h-[3.5rem] items-center justify-between bg-very-dark-grey px-4 md:mb-8 md:min-h-[4.5rem] md:px-8'>
      <p className='text-grey'>STRENGTH</p>

      <div className='flex items-center gap-x-4'>
        <p className='text-body uppercase md:text-heading-m'>
          {/* {passwordLength === 0 ? '' : passwordStrength.label} */}
          {passwordStrength.label === 'unset' ? '' : passwordStrength.label}
        </p>
        <PasswordStrengthBars />
      </div>
    </div>
  )
}

function PasswordStrengthBars() {
  const { passwordStrength } = usePasswordContext()
  const strengthColors = {
    0: 'red',
    1: 'orange',
    2: 'yellow',
    3: 'neon-green',
  }

  return (
    <div className='flex gap-x-2'>
      <StrengthLevelBar
        color={
          strengthColors[passwordStrength.score as keyof typeof strengthColors]
        }
        isFilled={passwordStrength.score >= 0}
      />
      <StrengthLevelBar
        color={
          strengthColors[passwordStrength.score as keyof typeof strengthColors]
        }
        isFilled={passwordStrength.score >= 4}
      />
      <StrengthLevelBar
        color={
          strengthColors[passwordStrength.score as keyof typeof strengthColors]
        }
        isFilled={passwordStrength.score >= 6}
      />
      {/* <StrengthLevelBar
        color={
          strengthColors[passwordStrength.score as keyof typeof strengthColors]
        }
        isFilled={passwordStrength.score >= 3}
      /> */}

      {/* <StrengthLevelBar
        color={strengthColors[passwordStrength.score]}
        isFilled={passwordStrength.score >= 4}
      />
      <StrengthLevelBar
        color={strengthColors[passwordStrength.score]}
        isFilled={passwordStrength.score >= 6}
      /> */}
      {/* <StrengthLevelBars
        color={strengthColors[strength.score]}
        isFilled={strength === 'too weak'}
      />
      <StrengthLevelBars
        color={strengthColors[strength.score]}
        isFilled={strength === 'weak'}
      />
      <StrengthLevelBars
        color={strengthColors[strength.score]}
        isFilled={strength === 'medium'}
      />
      <StrengthLevelBars
        color={strengthColors[strength.score]}
        isFilled={strength === 'strong'}
      /> */}
    </div>
  )
}

type StrengthLevelBarsProps = {
  color: string
  isFilled: boolean
}

function StrengthLevelBar({ color, isFilled }: StrengthLevelBarsProps) {
  return (
    <span
      className={`block h-7 min-w-[0.625rem] border-2 border-${color} ${
        isFilled ? `bg-${color}` : ''
      }`}
    />
  )
}
