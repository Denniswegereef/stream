import { useEffect, useRef, useState } from 'react'

interface BoundingBox {
  x: number
  y: number
  width: number
  height: number
  top: number
  left: number
  bottom: number
  right: number
}

/**
 * Measures an element's bounding box and returns ref with bounds
 */
export function useMeasure<T extends HTMLElement = HTMLDivElement>(): [
  React.RefObject<T | null>,
  BoundingBox,
] {
  const ref = useRef<T>(null)
  const [bounds, setBounds] = useState<BoundingBox>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  })

  useEffect(() => {
    const updateBounds = () => {
      const rect = ref.current?.getBoundingClientRect()

      if (!rect) return

      setBounds({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
      })
    }

    updateBounds()

    window.addEventListener('resize', updateBounds)

    return () => {
      window.removeEventListener('resize', updateBounds)
    }
  }, [])

  return [ref, bounds]
}
