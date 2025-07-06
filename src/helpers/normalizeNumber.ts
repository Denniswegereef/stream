/**
 * Normalizes a number to a 0-1 range based on min/max values
 * @param value - The value to normalize
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns A normalized number between 0 and 1
 */
export const normalizeNumber = (value: number, min: number, max: number) => {
  return (value - min) / (max - min)
}
