type HeadingProps = {
  children: React.ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h1 className='text-body-sm text-center text-grey md:text-heading-m'>
      {children}
    </h1>
  )
}
