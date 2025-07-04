import { useRef, type ComponentProps } from 'react'
import { cn } from '../helpers/cn'
import { useMousePosition } from '../hooks/useMousePosition'
import { linkOrButton, type LinkOrButtonVariantProps } from './Button'

export const Link = ({
  className,
  variant,
  size,
  children,
  ...props
}: LinkOrButtonVariantProps & ComponentProps<'a'>) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const { handleMouseMove } = useMousePosition(ref.current!)

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(linkOrButton({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  )
}
