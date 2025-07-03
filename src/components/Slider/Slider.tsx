import { Slider as SliderPrimitive } from 'radix-ui'
import { useId } from 'react'
import { cn } from '../../helpers/cn'

interface SliderProps {
  className?: string
}

export const Slider = ({ className }: SliderProps) => {
  const labelId = useId()
  const tooltipId = useId()

  const onValueChange = (value: number[]) => {
    console.log(value)
  }

  return (
    <form className={cn('relative', className)}>
      <span id={labelId} aria-hidden="true" className="sr-only">
        How many nights? 30 nights. Hosting 30 nights. Adjustable. Slide forward
        to increase. Slide backward to decrease.
      </span>

      <span
        id={tooltipId}
        aria-hidden="true"
        className="absolute top-0 left-0 translate-y-[-100%] bg-black"
      >
        30 nights
      </span>

      <SliderPrimitive.Root
        onValueChange={onValueChange}
        className="relative flex h-5 w-[200px] touch-none items-center select-none"
        defaultValue={[30]}
        max={100}
        step={1}
      >
        <SliderPrimitive.Track className="bg-hof relative h-[3px] grow rounded-full">
          <SliderPrimitive.Range className="bg-primary absolute h-full rounded-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="hover:bg-primary focus:shadow-blackA5 block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] focus:shadow-[0_0_0_5px] focus:outline-none"
          aria-label="Volume"
        />
      </SliderPrimitive.Root>
    </form>
  )
}

// return (
// <div>
//   <span id={labelId} aria-hidden="true">
//     How many nights? 30 nights. Hosting 30 nights. Adjustable. Slide forward
//     to increase. Slide backward to decrease.
//   </span>

//   <span id={tooltipId} aria-hidden="true">
//     30 nights
//   </span>

//   <div className="slider-container">
//     <input
//       className="slider-input"
//       aria-valuetext="Hosting 30 nights"
//       aria-valuenow={30}
//       aria-label="How many nights? 30 nights. Hosting 30 nights. Adjustable. Slide forward to increase. Slide backward to decrease."
//       aria-labelledby={labelId}
//       aria-describedby={tooltipId}
//       min="1"
//       max="30"
//       step="1"
//       type="range"
//       value="30"
//     />
//   </div>
// </div>
// )
