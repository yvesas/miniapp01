import { Module } from '@nestjs/common';
import { AppointmentController } from './controllers/appointment.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppointmentController],
  providers: [AppService],
})
export class AppModule {}
