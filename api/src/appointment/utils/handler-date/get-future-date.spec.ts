import { getFutureDate } from './handler-date'

test('increases date with one year', ()=>{
  const year = new Date().getFullYear()
  const futureYear = year+1 

  expect(getFutureDate(`${year}-05-17`).getFullYear()).toEqual(futureYear)
})