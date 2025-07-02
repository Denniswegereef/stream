interface EmbedMapProps {
  ariaLabel: string
}

export const EmbedMap = ({ ariaLabel }: EmbedMapProps) => {
  return (
    <div className="aspect-video w-full bg-primary" aria-label={ariaLabel}>
      Map
    </div>
  )
}
