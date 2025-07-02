import { tv, type VariantProps } from 'tailwind-variants'

export const linkOrButton = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary:
        'bg-tahiti-700 text-white hover:bg-tahiti-600 focus-visible:ring-tahiti-700',
      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500',
      outline:
        'border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
    },
    size: {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type LinkOrButtonVariantProps = VariantProps<typeof linkOrButton>
