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
    <section className="container-padding lg:container-padding mx-auto flex max-w-7xl flex-col items-center justify-center pt-4 pb-18 md:max-w-sm md:px-0 md:pt-24 md:pb-18 lg:grid lg:min-h-[calc(100vh-var(--header-height)-50px)] lg:max-w-7xl lg:grid-cols-2 lg:pt-20 lg:pb-30">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-large text-hof mb-6 flex max-w-[15ch] flex-col text-center">
          <span>Your home could</span>
          <span>make € 8,513</span>
          <span>on Airbnb</span>
        </h1>

        <div className="mb-8 flex w-full flex-col gap-2 text-center md:gap-1">
          <p className="text-medium">
            <button type="button" className="link-default">
              21 nights
            </button>
            <span className="px-1">·</span>
            <span>
              <span>€ 284</span>
              <span>/night</span>
            </span>
          </p>

          <p className="text-small text-foggy">
            Learn how we{' '}
            <button type="button" className="link-default">
              estimate earnings
            </button>
          </p>
        </div>

        <Slider className="mb-8 md:mb-6" />

        <PropertySummaryButton
          city={DATA.propertySummary.city}
          room={DATA.propertySummary.room}
          bedrooms={DATA.propertySummary.bedrooms}
          ariaLabel={DATA.propertySummary.ariaLabel}
          className="mb-6 md:mb-12 lg:mb-4"
        />
      </div>

      <EmbedMap ariaLabel={DATA.map.ariaLabel} className="lg:ml-2" />
    </section>
  )
}
