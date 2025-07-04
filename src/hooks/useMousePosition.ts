import { useCallback } from 'react'
import { normalizeNumber } from '../helpers/normalizeNumber'

export const useMousePosition = <T extends HTMLElement>(element: T) => {
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<T>) => {
      const rect = element.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      const normalizedX = normalizeNumber(x, 0, rect.width)
      const normalizedY = normalizeNumber(y, 0, rect.height)

      // State is not needed to avoid re-rendering
      element.style.setProperty('--mouse-x', `${normalizedX}`)
      element.style.setProperty('--mouse-y', `${normalizedY}`)
    },
    [element]
  )

  return {
    handleMouseMove,
  }
}
