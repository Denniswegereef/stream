import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges CSS classes using clsx and tailwind-merge
 * @param inputs - The CSS classes to combine and merge
 * @returns The merged CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
