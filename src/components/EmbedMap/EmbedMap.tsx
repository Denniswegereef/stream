import { cn } from '../../helpers/cn'

interface EmbedMapProps {
  ariaLabel: string
  className?: string
}

export const EmbedMap = ({ ariaLabel, className }: EmbedMapProps) => {
  return (
    <div
      className={cn(
        'flex aspect-[20/13] min-h-[230px] w-full items-center justify-center rounded-2xl bg-[#b2e6f4] shadow-sm lg:aspect-[20/19]',
        className
      )}
      aria-label={ariaLabel}
    >
      Map
    </div>
  )
}
