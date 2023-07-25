import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class AppointmentController {
  constructor(private readonly appointmentService: AppService) {}

  @Get()
  getHello(): string {
    return this.appointmentService.getHello();
  }
}
