import {setYear, parseISO} from 'date-fns'

/**
 * Receives "2023-09-13" and returns "2024-09-13"
 */
export function getFutureDate(date:string): Date {
  return setYear(parseISO(date),  new Date().getFullYear()+1)
}