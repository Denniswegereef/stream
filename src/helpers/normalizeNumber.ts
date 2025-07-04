export const normalizeNumber = (value: number, min: number, max: number) => {
  return (value - min) / (max - min)
}
