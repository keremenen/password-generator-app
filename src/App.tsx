import CopyIcon from './assets/icon-copy.svg?react'

function App() {
  return (
    <main className='mx-auto flex w-full max-w-[540px] flex-col gap-8'>
      <h1 className='text-center text-heading-m text-grey'>
        Password Generator
      </h1>

      <section className='flex items-center justify-between bg-dark-grey px-8 py-5'>
        <h2 className='cursor-pointer text-heading-l opacity-25'>P4$5W0rD!</h2>
        <CopyIcon />
      </section>
    </main>
  )
}

export default App
