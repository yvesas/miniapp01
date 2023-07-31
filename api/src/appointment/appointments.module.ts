import { Module } from '@nestjs/common';
import { AppointmentService } from './controller/appointment.service';
// import { UsersResolver } from './users.resolver';

@Module({
  providers: [AppointmentService]
})
export class AppointmentModule {}
