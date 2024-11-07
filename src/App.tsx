import CopyIcon from './assets/icon-copy.svg?react'
import Button from './components/button'
import { Checkbox } from './components/ui/checkbox'
import { Slider } from './components/ui/slider'

function App() {
  return (
    <main className='mx-auto flex w-full max-w-[540px] flex-col gap-8'>
      <h1 className='text-center text-heading-m text-grey'>
        Password Generator
      </h1>

      <div className='flex flex-col gap-6'>
        <section className='flex max-h-20 items-center justify-between bg-dark-grey px-8 py-5'>
          <h2 className='cursor-pointer text-heading-l opacity-25'>
            P4$5W0rD!
          </h2>
          <CopyIcon />
        </section>

        <section className='bg-dark-grey px-8 pb-8 pt-6'>
          <div className='mb-4 flex h-[43px] items-center justify-between'>
            <h3>Character Length</h3>
            <span className='text-heading-l text-neon-green'>0</span>
          </div>
          {/* INPUT SLIDER */}
          <Slider defaultValue={[10]} max={20} step={1} className='mb-8 h-7' />
          {/* OPTIONS */}
          <ul className='mb-8 flex flex-col gap-y-5 text-body'>
            <li className='flex items-start'>
              <Checkbox id='uppercaseLetters' />
              <label htmlFor='uppercaseLetters' className='cursor-pointer pl-6'>
                Include Uppercase Letters
              </label>
            </li>
            <li className='flex items-start'>
              <Checkbox id='lowercaseLetters' />
              <label htmlFor='lowercaseLetters' className='cursor-pointer pl-6'>
                Include Lowercase Letters
              </label>
            </li>
            <li className='flex items-start'>
              <Checkbox id='numbers' />
              <label htmlFor='numbers' className='cursor-pointer pl-6'>
                Include Numbers
              </label>
            </li>
            <li className='flex items-start'>
              <Checkbox id='symbols' />
              <label htmlFor='symbols' className='cursor-pointer pl-6'>
                Include Symbols
              </label>
            </li>
          </ul>

          {/* STRENGTH INDICATOR */}

          <div className='mb-8 flex min-h-[72px] items-center justify-between bg-very-dark-grey px-8 py-5'>
            <p className='text-body text-grey'>STRENGTH</p>

            <div className='flex items-center gap-x-4'>
              <p className='text-heading-m'>MEDIUM</p>

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
