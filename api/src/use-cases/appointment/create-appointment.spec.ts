import { Appointment } from "../../entities/appointment/appointment"
import { CreateAppointment } from "./create-appointment"

describe('Create appointment', () => {
  it('should be able to create appointment', ()=>{
    const appointmentCreated = new CreateAppointment()

    const startsAt = new Date()
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate()+1)
    endsAt.setDate(endsAt.getDate()+2)

    expect(appointmentCreated.execute({
      customerId: '01A',
      customerName: 'Alfred Wiston',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  
  })
})