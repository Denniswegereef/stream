import { useMemo, useState } from 'react'
import { CONTENT } from '../../data/content'
import { cn } from '../../helpers/cn'
import { getRandomValue } from '../../helpers/getRandomValue'
import { interpolateString } from '../../helpers/interpolateString'
import { formatPrice } from '../../hooks/formatPrice'
import { PropertySummaryButton } from '../../ui/PropertySummaryButton'
import { EmbedMap } from '../EmbedMap/EmbedMap'
import { Slider } from '../Slider/Slider'

// Set the initial value to 1 to avoid 0 nights
const INITIAL_VALUE = 1

export const Hero = () => {
  // Get a random value between on page load
  const randomValue = useMemo(() => {
    return getRandomValue(100, 300, 1)
  }, [])

  const [currentValue, setCurrentValue] = useState(INITIAL_VALUE)
  const [isDragging, setIsDragging] = useState(false)

  const calcululatedValue = currentValue * randomValue

  const onClickOpenModal = () => {
    console.log('Open a modal, which is not implemented yet')
  }

  return (
    <section className="container-padding lg:container-padding mx-auto flex max-w-7xl flex-col items-center justify-center pt-4 pb-18 md:max-w-sm md:px-0 md:pt-24 md:pb-18 lg:grid lg:min-h-[calc(100vh-var(--header-height)-50px)] lg:max-w-7xl lg:grid-cols-2 lg:pt-20 lg:pb-30">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-large text-hof mb-6 flex max-w-[15ch] flex-col text-center">
          <span>{CONTENT.hero.title.first}</span>
          <span>
            {interpolateString(CONTENT.hero.title.second, {
              price: formatPrice(calcululatedValue),
            })}
          </span>
          <span>{CONTENT.hero.title.third}</span>
        </h1>

        <div
          className={cn(
            'mb-8 flex w-full flex-col gap-2 text-center transition-opacity duration-150 md:gap-1',
            isDragging && 'opacity-0'
          )}
        >
          <p className="text-medium">
            <button
              type="button"
              className="link-default"
              onClick={onClickOpenModal}
            >
              {interpolateString(CONTENT.hero.subtitle.valueNights, {
                nights: `${currentValue}`,
              })}
            </button>
            <span className="px-1">·</span>
            <span>
              <span>{formatPrice(randomValue)}</span>
              <span>{CONTENT.hero.subtitle.night}</span>
            </span>
          </p>

          <p className="text-small text-foggy">
            {CONTENT.hero.learnMore.text}{' '}
            <button
              type="button"
              className="link-default"
              onClick={onClickOpenModal}
            >
              {CONTENT.hero.learnMore.label}
            </button>
          </p>
        </div>

        <Slider
          className="mb-8 md:mb-6"
          onValueChange={setCurrentValue}
          onDragChange={setIsDragging}
          initialValue={INITIAL_VALUE}
          min={INITIAL_VALUE}
          max={30}
        />

        <PropertySummaryButton
          city={CONTENT.propertySummary.city}
          room={CONTENT.propertySummary.room}
          bedrooms={CONTENT.propertySummary.bedrooms}
          ariaLabel={CONTENT.propertySummary.ariaLabel}
          className="mb-6 md:mb-12 lg:mb-4"
          onClick={onClickOpenModal}
        />
      </div>

      <EmbedMap ariaLabel={CONTENT.map.ariaLabel} className="lg:ml-2" />
    </section>
  )
}
