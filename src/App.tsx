import GenerateButton from './components/generate-button'
import Heading from './components/heading'
import PasswordLength from './components/password-length'
import PasswordOtpions from './components/password-options'
import PasswordPreview from './components/password-preview'
import PasswordStrength from './components/password-strength'
import PasswordContextProvider from './contexts/PasswordContextProvider'

function App() {
  return (
    <main className='mx-auto flex w-full max-w-[540px] flex-col gap-y-4 md:gap-y-8'>
      <Heading>Password Generator</Heading>
      <div className='flex flex-col gap-y-4 md:gap-y-6'>
        <PasswordContextProvider>
          <PasswordPreview />
          <section className='bg-dark-grey p-4 md:px-8 md:pb-8 md:pt-6'>
            <PasswordLength />
            <PasswordOtpions />
            <PasswordStrength />
            <GenerateButton />
          </section>
        </PasswordContextProvider>
      </div>
    </main>
  )
}

export default App
