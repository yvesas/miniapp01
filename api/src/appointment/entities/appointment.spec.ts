import { getFutureDate } from '../utils/handler-date/handler-date';
import { Appointment  } from './appointment';

test('Create an Appointment', () => {
  const startsAt = getFutureDate('2023-09-25')
  const endsAt = getFutureDate('2023-09-26')
  // startsAt.setDate(startsAt.getDate()+1)
  // endsAt.setDate(endsAt.getDate()+2)

  const appointment = new Appointment({
    customerId: '01A',
    customerName: 'Alfred Wiston',
    startsAt,
    endsAt
  })  

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customerName).toEqual('Alfred Wiston')
})

test('cannot create an Appointment with end date before start date', () => {  
  const startsAt = getFutureDate('2023-09-25')
  const endsAt = getFutureDate('2023-09-24')
  // startsAt.setDate(startsAt.getDate()+2)
  // endsAt.setDate(endsAt.getDate()+1)

  expect(()=>{
    return new Appointment({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt,
      endsAt
    })

  }).toThrow()
})

test('cannot create an Appointment with start date before (or equal) now', () => {
  const startsAt = new Date()
  const endsAt = new Date()  
  
  startsAt.setDate(startsAt.getDate()-1)
  endsAt.setDate(endsAt.getDate()+2)

  expect(()=>{
    return new Appointment({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt,
      endsAt
    })

  }).toThrow()
})