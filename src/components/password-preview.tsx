import CopyIcon from '@/assets/icon-copy.svg?react'
import { cn, copyToClipboard, usePasswordContext } from '@/lib/utils'
import { useState, useEffect } from 'react'

export default function PasswordPreview() {
  const { generatedPassword } = usePasswordContext()
  const [isCopySuccessFull, setIsCopySuccessFull] = useState(false)

  useEffect(() => {
    if (isCopySuccessFull) {
      const timer = setTimeout(() => {
        setIsCopySuccessFull(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopySuccessFull])

  const handleCopyClick = () => {
    if (generatedPassword === '') return
    copyToClipboard(generatedPassword)
    setIsCopySuccessFull(true)
  }

  return (
    <section className='flex max-h-16 items-center justify-between bg-dark-grey px-4 py-5 md:max-h-20 md:px-8'>
      <h2 className='text-heading-m md:text-heading-l'>
        {generatedPassword || <span className='opacity-25'>P4$5W0rD!</span>}
      </h2>
      <div className='relative flex gap-x-4 text-neon-green'>
        {isCopySuccessFull && <p className='absolute right-10'>COPIED</p>}
        <CopyIcon
          onClick={handleCopyClick}
          className={cn(
            `cursor-pointer text-neon-green transition duration-200 hover:text-white`,
            {
              'cursor-not-allowed opacity-25 hover:text-neon-green':
                generatedPassword === '',
            }
          )}
        />
      </div>
    </section>
  )
}
