import CopyIcon from '@/assets/icon-copy.svg?react'

export default function PasswordPreview() {
  return (
    <section className='flex max-h-16 items-center justify-between bg-dark-grey px-4 py-5 md:max-h-20 md:px-8'>
      <h2 className='cursor-pointer text-heading-m opacity-25 md:text-heading-l'>
        P4$5W0rD!
      </h2>
      <CopyIcon />
    </section>
  )
}