import { cn } from '../helpers/cn'
import { Search } from '../icons/Search'

interface PropertySummaryButtonProps {
  city: string
  room: string
  bedrooms: number
  ariaLabel: string
  className?: string
}

export const PropertySummaryButton = ({
  city,
  room,
  bedrooms,
  ariaLabel,
  className,
}: PropertySummaryButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'text-small md:text-medium border-deco flex w-full max-w-[420px] items-center rounded-4xl border bg-white py-3 pr-6 pl-4 no-underline md:px-5 md:py-5 lg:max-w-[440px]',
        className
      )}
      aria-label={ariaLabel}
    >
      <div className="mr-3">
        <Search className="size-4" />
      </div>
      <div className="flex flex-col items-start md:flex-row">
        <span className="text-hof font-semibold">{city}</span>
        <span className="text-foggy font-medium">
          <span className="hidden px-1 md:inline">·</span>
          <span>Entire place</span>
          <span className="px-1">·</span>
          <span>2 bedrooms</span>
        </span>
      </div>
    </button>
  )
}
