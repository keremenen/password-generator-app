import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import Check from '@/assets/icon-check.svg?react'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 border-2 border-almost-white transition-all duration-300 hover:border-neon-green focus-visible:border-neon-green focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-neon-green data-[state=checked]:bg-neon-green dark:focus-visible:ring-zinc-300',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
