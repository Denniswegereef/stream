import { PropertySummaryButton } from '../../ui/PropertySummaryButton'
import { EmbedMap } from '../EmbedMap/EmbedMap'
import { Slider } from '../Slider/Slider'

const DATA = {
  propertySummary: {
    city: 'Amsterdam',
    room: 'Entire place',
    bedrooms: 2,
    ariaLabel:
      'Estimates for Amsterdam, Entire place, 2 bedrooms, Tell us about your place to customize the estimate',
  },
  map: {
    ariaLabel:
      'Map of Amsterdam showing 12 listings and their average nightly price, Expand map to interact.',
  },
} as const

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-large text-hof flex flex-col text-center">
        <span>Your home could</span>
        <span>make € 8,513</span>
        <span>on Airbnb</span>
      </h1>

      <p>
        <button type="button" className="link-default">
          21 nights
        </button>
        <span>,</span>
        <span>
          <span>€ 284</span>
          <span>/night</span>
        </span>
      </p>

      <p>
        Learn how we{' '}
        <button type="button" className="link-default">
          estimate earnings
        </button>
      </p>

      <Slider />

      <PropertySummaryButton
        city={DATA.propertySummary.city}
        room={DATA.propertySummary.room}
        bedrooms={DATA.propertySummary.bedrooms}
        ariaLabel={DATA.propertySummary.ariaLabel}
      />

      <EmbedMap ariaLabel={DATA.map.ariaLabel} />
    </section>
  )
}
