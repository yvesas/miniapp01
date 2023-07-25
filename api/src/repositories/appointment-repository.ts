import { Appointment } from "../entities/appointment/appointment";

export interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>
  findOverlapping(startsAt: Date, endsAt: Date): Promise<Appointment | null>
}