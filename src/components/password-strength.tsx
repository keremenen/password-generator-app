import { usePasswordContext } from '@/lib/utils'

export default function PasswordStrength() {
  const { passwordStrength, passwordLength } = usePasswordContext()

  return (
    <div className='mb-4 flex min-h-[3.5rem] items-center justify-between bg-very-dark-grey px-4 md:mb-8 md:min-h-[4.5rem] md:px-8'>
      <p className='text-grey'>STRENGTH</p>

      <div className='flex items-center gap-x-4'>
        <p className='text-body uppercase md:text-heading-m'>
          {passwordLength === 0 ? '' : passwordStrength.label}
        </p>
        <PasswordStrengthBars strength={passwordStrength} />
      </div>
    </div>
  )
}

type PasswordStrengthBarsProps = {
  strength: {
    label: 'too weak' | 'weak' | 'medium' | 'strong'
    score: number
  }
}

function PasswordStrengthBars({ strength }: PasswordStrengthBarsProps) {
  const strengthColors = {
    0: 'red',
    1: 'orange',
    2: 'yellow',
    3: 'neon-green',
  }

  return (
    <div className='flex gap-x-2'>
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

// type StrengthLevelBarsProps = {
//   color: string
//   isFilled: boolean
// }

// function StrengthLevelBars({ color, isFilled }: StrengthLevelBarsProps) {
//   return (
//     <span
//       className={`block h-7 min-w-[0.625rem] border-2 border-${color} ${
//         isFilled ? `bg-${color}` : ''
//       }`}
//     />
//   )
// }
