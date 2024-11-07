import { usePasswordContext } from '@/lib/utils'
import { Slider } from './ui/slider'

export default function PasswordLength() {
  const { passwordLength } = usePasswordContext()

  return (
    <>
      <div className='mb-[0.4375rem] flex h-8 items-center justify-between md:mb-4 md:h-[2.6875rem]'>
        <h3>Character Length</h3>
        <span className='text-heading-m text-neon-green md:text-heading-l'>
          {passwordLength}
        </span>
      </div>
      <Slider defaultValue={[10]} max={20} step={1} className='mb-8 h-7' />
    </>
  )
}
