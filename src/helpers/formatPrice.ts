/**
 * Formats a number as a currency string
 * @param price - The number to format
 * @param currency - The currency to use (default: EUR)
 * @param locale - The locale to use (default: en-US)
 */

export const formatPrice = (
  price: number,
  currency = 'EUR',
  locale = 'en-NL'
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return formatter.format(price)
}
