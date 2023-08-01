import { Module } from '@nestjs/common';
import { AppointmentModule} from './appointment/appointments.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [AppointmentModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
