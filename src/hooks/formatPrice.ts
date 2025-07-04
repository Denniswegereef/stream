export const formatPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return formatter.format(price)
}
