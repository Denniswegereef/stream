import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../helpers/cn'

// Styling can be also used for links
export const linkOrButton = tv({
  base: 'disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary:
        'rounded-4xl flex items-center justify-center font-semibold leading-5',
    },
    size: {
      md: 'px-7 py-3.5 bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] text-white',
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
      type="button"
      style={
        {
          '--mouse-x': '34.7421875',
          '--mouse-y': '94.79166666666666',
          'background-position': `calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)`,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </button>
  )
}
