import { Slider as SliderPrimitive } from 'radix-ui'
import { useCallback, useId, useState } from 'react'
import { CONTENT } from '../../data/content'
import { cn } from '../../helpers/cn'
import { interpolateString } from '../../helpers/interpolateString'
import { normalizeNumber } from '../../helpers/normalizeNumber'
import { useMeasure } from '../../hooks/useMeasure'

const DEFAULT_VALUES = {
  initialValue: 0,
  min: 0,
  max: 100,
  step: 1,
}

interface SliderProps {
  className?: string
  onValueChange?: (value: number) => void
  onDragChange?: (isDragging: boolean) => void
  initialValue?: number
  min?: number
  max?: number
  step?: number
}

export const Slider = ({
  className,
  onValueChange,
  onDragChange,
  initialValue = DEFAULT_VALUES.initialValue,
  min = DEFAULT_VALUES.min,
  max = DEFAULT_VALUES.max,
  step = DEFAULT_VALUES.step,
}: SliderProps) => {
  const [sliderRef, sliderBounds] = useMeasure()
  const [tooltipRef, tooltipBounds] = useMeasure()

  const labelId = useId()
  const tooltipId = useId()

  // Internal state
  const [value, setValue] = useState(initialValue)
  const [isDragging, setIsDragging] = useState(false)

  const normalizedProgressPercentage = normalizeNumber(value, min, max)

  // Handlers
  const handleValueChange = useCallback(
    (newValue: number[]) => {
      const val = newValue[0]
      setValue(val)

      if (onValueChange) {
        onValueChange(val)
      }
    },
    [onValueChange]
  )

  const toggleDragging = useCallback(
    (dragging: boolean) => {
      setIsDragging(dragging)
      if (onDragChange) {
        onDragChange(dragging)
      }
    },
    [onDragChange]
  )

  const handlePointerDown = useCallback(() => {
    toggleDragging(true)
  }, [toggleDragging])

  const handlePointerUp = useCallback(() => {
    toggleDragging(false)
  }, [toggleDragging])

  return (
    <form className={cn('relative', className)}>
      <span id={labelId} aria-hidden="true" className="sr-only">
        {interpolateString(CONTENT.slider.hiddenTitle, {
          nights: `${max}`,
        })}
      </span>

      <span
        id={tooltipId}
        ref={tooltipRef}
        aria-hidden="true"
        style={{
          transform: `translateX(${(sliderBounds.width - tooltipBounds.width) * normalizedProgressPercentage}px)`,
        }}
        className={cn(
          'bg-hof text-medium pointer-events-none absolute bottom-0 left-0 -mt-8 mb-8 translate-y-[-35px] rounded-4xl px-6 py-3 text-white opacity-0 transition-opacity duration-150',
          isDragging && 'pointer-events-auto opacity-100'
        )}
        tabIndex={isDragging ? 0 : -1}
      >
        {interpolateString(CONTENT.slider.tooltipLabel, {
          nights: `${value}`,
        })}
      </span>

      <SliderPrimitive.Root
        ref={sliderRef}
        onValueChange={handleValueChange}
        className="relative flex h-[35px] w-[310px] touch-none items-center select-none md:w-[360px] lg:w-[305px]"
        defaultValue={[initialValue]}
        value={[value]}
        min={min}
        max={max}
        step={step}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <SliderPrimitive.Track
          className={cn(
            'bg-bebe rounded-1 transition-height relative h-1 grow rounded-full duration-150',
            // Height transition unfortunately, because scale-y distorts the border radius
            isDragging && 'h-3'
          )}
        >
          <SliderPrimitive.Range className="from-primary to-primary-dark absolute h-full rounded-full bg-linear-to-r" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="bg-faint block size-[35px] rounded-full shadow-[var(--shadow-thumb)] filter-[var(--filter-thumb)]"
          aria-label={CONTENT.slider.thumb.ariaLabel}
        />
      </SliderPrimitive.Root>
    </form>
  )
}
