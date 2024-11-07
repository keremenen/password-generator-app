export default function PasswordStrength() {
  return (
    <div className='mb-4 flex min-h-[3.5rem] items-center justify-between bg-very-dark-grey px-4 md:mb-8 md:min-h-[4.5rem] md:px-8'>
      <p className='text-grey'>STRENGTH</p>

      <div className='flex items-center gap-x-4'>
        <p className='text-body md:text-heading-m'>MEDIUM</p>

        <div className='flex gap-x-2'>
          <span className='block h-7 min-w-[0.625rem] border-2 border-yellow bg-yellow' />
          <span className='block h-7 min-w-[0.625rem] border-2 border-yellow bg-yellow' />
          <span className='block h-7 min-w-[0.625rem] border-2 border-yellow bg-yellow' />
          <span className='block h-7 min-w-[0.625rem] border-2 border-almost-white' />
        </div>
      </div>
    </div>
  )
}
