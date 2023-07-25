import { Module } from '@nestjs/common';
import { AppointmentController } from './controllers/appointment.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppointmentController],
  providers: [AppService],
})
export class AppModule {}
