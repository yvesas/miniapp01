import { AppointmentsRepository } from '../repositories/appointments-repository';
import { Appointment } from "../entities/appointment"
import { CreateAppointment } from "./create-appointment"
import { AppointmentsCacheMemory } from '../repositories/cache-memory/appointment-cache-memory';
import { getFutureDate } from '../../shared/handler-date/handler-date';

describe('Create appointment', () => {
  it('should be able to create appointment', ()=>{
    const appointmentsRepository = new AppointmentsCacheMemory()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const startsAt = getFutureDate('2023-09-25')
    const endsAt = getFutureDate('2023-09-26')

    startsAt.setDate(startsAt.getDate()+1)
    endsAt.setDate(endsAt.getDate()+2)

    expect(createAppointment.execute({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  
  })

  it('should not be able to create an appointment with overlapping dates', async ()=>{
    const appointmentsRepository = new AppointmentsCacheMemory()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const startsAt = getFutureDate('2023-09-10')
    const endsAt = getFutureDate('2023-09-15')

    startsAt.setDate(startsAt.getDate()+1)
    endsAt.setDate(endsAt.getDate()+2)

    await createAppointment.execute({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt,
      endsAt
    })

    expect(createAppointment.execute({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt: getFutureDate('2023-09-14'),
      endsAt: getFutureDate('2023-09-18')
    })).rejects.toBeInstanceOf(Error)

    expect(createAppointment.execute({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt: getFutureDate('2023-09-08'),
      endsAt: getFutureDate('2023-09-12')
    })).rejects.toBeInstanceOf(Error)

    expect(createAppointment.execute({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt: getFutureDate('2023-09-12'),
      endsAt: getFutureDate('2023-09-14')
    })).rejects.toBeInstanceOf(Error)
  
  })

})