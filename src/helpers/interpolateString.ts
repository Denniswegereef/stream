// interpolateString('Hello {{ name }}', { name: 'Dennis' }) => 'Hello Dennis'

export const interpolateString = (
  template: string,
  params: Record<string, string>
): string => {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, paramKey) => {
    const value = params[paramKey]
    return value !== undefined ? String(value) : match
  })
}
