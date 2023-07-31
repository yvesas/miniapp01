import { AppointmentsRepository } from "src/appointment/repositories/appointments-repository"
import { Appointment } from "../entities/appointment/appointment"

interface CreateAppointmentRequest {
  customerId: string
  customerName: string
  startsAt: Date
  endsAt: Date
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
  constructor(
    private appointmentsRepository: AppointmentsRepository
  ){}

   async execute (request:CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const overlappingAppointment = await this.appointmentsRepository.findOverlapping(request.startsAt, request.endsAt)
    
    if(overlappingAppointment){
      throw new Error('Another appointment overlaps this appointment dates ')
    }

    const appointment = new Appointment(request)
    await this.appointmentsRepository.create(appointment)

    return appointment
   }
}