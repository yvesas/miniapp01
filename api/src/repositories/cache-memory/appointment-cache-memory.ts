import { areIntervalsOverlapping } from "date-fns";
import { Appointment } from "../../entities/appointment/appointment";
import { AppointmentsRepository } from "../appointments-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppointmentsCacheMemory implements AppointmentsRepository {
  public items: Appointment[] = [] 

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment)
  }
 
  async findOverlapping(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
    const overlappingAppointment = this.items.find(appointment => {
      return areIntervalsOverlapping(
        {start: startsAt, end: endsAt},
        {start: appointment.startsAt, end: appointment.endsAt},
        {inclusive: true} 
      )
    })

    if(!overlappingAppointment){
      return null
    }
    
    return overlappingAppointment
  }
}