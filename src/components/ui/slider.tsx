import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden bg-very-dark-grey'>
      <SliderPrimitive.Range className='absolute h-full bg-neon-green' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='hover:bg-ne t block size-7 cursor-pointer rounded-full border-zinc-900/50 bg-almost-white transition hover:bg-very-dark-grey hover:ring-2 hover:ring-neon-green focus-visible:bg-very-dark-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
