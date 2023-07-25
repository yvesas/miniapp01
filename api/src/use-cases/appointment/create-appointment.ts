import { Appointment } from "../../entities/appointment/appointment"

interface CreateAppointmentRequest {
  customerId: string
  customerName: string
  startsAt: Date
  endsAt: Date
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
   async execute (request:CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment(request)

    return appointment
   }
}