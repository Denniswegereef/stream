/**
 * Replaces template variables in a string with actual values
 * @example interpolateString('Hello {{ name }}', { name: 'Dennis' }) => 'Hello Dennis'
 * @param template - The template string to interpolate
 * @param params - The parameters to interpolate into the template
 * @returns The interpolated string
 */
export const interpolateString = (
  template: string,
  params: Record<string, string>
): string => {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, paramKey) => {
    const value = params[paramKey]
    return value !== undefined ? String(value) : match
  })
}
