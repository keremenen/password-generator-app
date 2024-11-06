import CopyIcon from './assets/icon-copy.svg?react'
import { Slider } from './components/ui/slider'

function App() {
  return (
    <main className='mx-auto flex w-full max-w-[540px] flex-col gap-8'>
      <h1 className='text-center text-heading-m text-grey'>
        Password Generator
      </h1>

      <div className='flex flex-col gap-6'>
        <section className='flex items-center justify-between bg-dark-grey px-8 py-5'>
          <h2 className='cursor-pointer text-heading-l opacity-25'>
            P4$5W0rD!
          </h2>
          <CopyIcon />
        </section>

        <section className='bg-dark-grey px-8 pb-8 pt-6'>
          <div className='flex items-center justify-between'>
            <h3>Character Length</h3>
            <span className='text-heading-l text-neon-green'>0</span>
          </div>

          {/* INPUT SLIDER */}
          <Slider defaultValue={[33]} max={100} step={1} />
          {/* OPTIONS */}

          {/* STRENGTH */}

          {/* GENERATE BUTTON */}
        </section>
      </div>
    </main>
  )
}

export default App
