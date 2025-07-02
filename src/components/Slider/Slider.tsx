import { Slider as SliderPrimitive } from 'radix-ui'
import { useId } from 'react'

export const Slider = () => {
  const labelId = useId()
  const tooltipId = useId()

  const onValueChange = (value: number[]) => {
    console.log(value)
  }

  return (
    <form>
      <span id={labelId} aria-hidden="true">
        How many nights? 30 nights. Hosting 30 nights. Adjustable. Slide forward
        to increase. Slide backward to decrease.
      </span>

      <span id={tooltipId} aria-hidden="true">
        30 nights
      </span>

      <SliderPrimitive.Root
        onValueChange={onValueChange}
        className="relative flex h-5 w-[200px] touch-none select-none items-center"
        defaultValue={[30]}
        max={100}
        step={1}
      >
        <SliderPrimitive.Track className="relative h-[3px] grow rounded-full bg-hof">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] hover:bg-primary focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
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
