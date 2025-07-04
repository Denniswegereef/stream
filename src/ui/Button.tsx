import { useRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../helpers/cn'
import { useMousePosition } from '../hooks/useMousePosition'

// Styling can be also used for links
export const linkOrButton = tv({
  base: 'disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
  variants: {
    variant: {
      primary:
        'before:mix-blend-overlay before:blur-xl relative rounded-4xl flex items-center justify-center font-semibold leading-5 before:absolute before:size-10 before:bg-white before:rounded-full before:translate-y-[calc(var(--mouse-y)*100%)] before:translate-x-[calc(var(--mouse-x)*300%)]  before:inset-0 before:z-[1] before:content-[""] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 bg-gradient-to-r from-primary-light via-primary to-primary-dark',
    },
    size: {
      md: 'px-7 py-3.5  text-white',
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
  const ref = useRef<HTMLButtonElement>(null)
  const { handleMouseMove } = useMousePosition(ref.current!)

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(linkOrButton({ variant, size }), className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
