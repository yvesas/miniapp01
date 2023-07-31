import { Module } from '@nestjs/common';
import { AppointmentModule} from './appointment/appointments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, AppointmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
