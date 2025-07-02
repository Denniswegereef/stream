import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../helpers/cn'

// Styling can be also used for links
export const linkOrButton = tv({
  base: 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary:
        'bg-tahiti-700 text-white hover:bg-tahiti-600 focus-visible:ring-tahiti-700',
    },
    size: {
      md: 'h-10 px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type LinkOrButtonVariantProps = VariantProps<typeof linkOrButton>

export const Button = ({
  className,
  variant,
  size,
  children,
  ...props
}: LinkOrButtonVariantProps & ComponentProps<'button'>) => {
  return (
    <button
      className={cn(linkOrButton({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
