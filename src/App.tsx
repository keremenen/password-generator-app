import Button from './components/button'
import Heading from './components/heading'
import PasswordPreview from './components/password-preview'
import { Checkbox } from './components/ui/checkbox'
import { Slider } from './components/ui/slider'

function App() {
  return (
    <main className='mx-auto flex w-full max-w-[540px] flex-col gap-y-4 md:gap-y-8'>
      <Heading>Password Generator</Heading>

      <div className='flex flex-col gap-y-4 md:gap-y-6'>
        <PasswordPreview />
        <section className='bg-dark-grey p-4 md:px-8 md:pb-8 md:pt-6'>
          <div className='mb-[7px] flex h-8 items-center justify-between md:mb-4 md:h-[43px]'>
            <h3>Character Length</h3>
            <span className='text-heading-m text-neon-green md:text-heading-l'>
              10
            </span>
          </div>
          {/* INPUT SLIDER */}
          <Slider defaultValue={[10]} max={20} step={1} className='mb-8 h-7' />
          {/* OPTIONS */}
          <ul className='mb-8 flex flex-col gap-y-4 md:gap-y-5'>
            <li className='flex items-start'>
              <Checkbox id='uppercaseLetters' />
              <label
                htmlFor='uppercaseLetters'
                className='cursor-pointer pl-5 md:pl-6'
              >
                Include Uppercase Letters
              </label>
            </li>
            <li className='flex items-start'>
              <Checkbox id='lowercaseLetters' />
              <label
                htmlFor='lowercaseLetters'
                className='cursor-pointer pl-5 md:pl-6'
              >
                Include Lowercase Letters
              </label>
            </li>
            <li className='flex items-start'>
              <Checkbox id='numbers' />
              <label htmlFor='numbers' className='cursor-pointer pl-5 md:pl-6'>
                Include Numbers
              </label>
            </li>
            <li className='flex items-start'>
              <Checkbox id='symbols' />
              <label htmlFor='symbols' className='cursor-pointer pl-5 md:pl-6'>
                Include Symbols
              </label>
            </li>
          </ul>

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
