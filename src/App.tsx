import Button from './components/button'
import Heading from './components/heading'
import PasswordLength from './components/password-length'
import PasswordOtpions from './components/password-options'
import PasswordPreview from './components/password-preview'

function App() {
  return (
    <main className='mx-auto flex w-full max-w-[540px] flex-col gap-y-4 md:gap-y-8'>
      <Heading>Password Generator</Heading>

      <div className='flex flex-col gap-y-4 md:gap-y-6'>
        <PasswordPreview />
        <section className='bg-dark-grey p-4 md:px-8 md:pb-8 md:pt-6'>
          <PasswordLength />
          {/* INPUT SLIDER */}

          {/* OPTIONS */}
          <PasswordOtpions />

          {/* STRENGTH INDICATOR */}

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

          {/* GENERATE BUTTON */}
          <Button>Generate</Button>
        </section>
      </div>
    </main>
  )
}

export default App
