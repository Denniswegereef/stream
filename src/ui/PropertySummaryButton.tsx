interface PropertySummaryButtonProps {
  city: string
  room: string
  bedrooms: number
  ariaLabel: string
}

export const PropertySummaryButton = ({
  city,
  room,
  bedrooms,
  ariaLabel,
}: PropertySummaryButtonProps) => {
  return (
    <button type="button" className="link-default" aria-label={ariaLabel}>
      <span>{city}</span>
      <span>,</span>
      <span>
        <span>€ 284</span>
        <span>/night</span>
      </span>
    </button>
  )
}
