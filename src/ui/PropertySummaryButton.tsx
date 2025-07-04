import { CONTENT } from '../data/content'
import { cn } from '../helpers/cn'
import { interpolateString } from '../helpers/interpolateString'
import { Search } from '../icons/Search'

interface PropertySummaryButtonProps {
  city: string
  room: string
  bedrooms: number
  ariaLabel: string
  className?: string
  onClick?: () => void
}

export const PropertySummaryButton = ({
  city,
  room,
  bedrooms,
  ariaLabel,
  className,
  onClick,
}: PropertySummaryButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'text-small md:text-medium border-deco flex w-full max-w-[420px] items-center rounded-4xl border bg-white py-3 pr-6 pl-4 no-underline md:px-5 md:py-5 lg:h-16 lg:max-w-[440px]',
        className
      )}
      aria-label={interpolateString(ariaLabel, {
        city,
        room,
        bedrooms: `${bedrooms}`,
      })}
      onClick={onClick}
    >
      <div className="mr-3">
        <Search className="size-4" />
      </div>
      <div className="flex flex-col items-start md:flex-row">
        <span className="text-hof font-semibold">{city}</span>
        <span className="text-foggy font-medium">
          <span className="hidden px-1 md:inline">·</span>
          <span>{room}</span>
          <span className="px-1">·</span>
          <span>
            {bedrooms} {CONTENT.labels.bedrooms}
          </span>
        </span>
      </div>
    </button>
  )
}
