import type { ComponentProps } from 'react'
import { cn } from '../helpers/cn'
import { linkOrButton, type LinkOrButtonVariantProps } from './Button'

export const Link = ({
  className,
  variant,
  size,
  children,
  ...props
}: LinkOrButtonVariantProps & ComponentProps<'a'>) => {
  return (
    <a className={cn(linkOrButton({ variant, size }), className)} {...props}>
      {children}
    </a>
  )
}
