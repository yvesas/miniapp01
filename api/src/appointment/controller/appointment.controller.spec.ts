import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from '../appointment.service';

describe('AppointmentController', () => {
  let appointmentController: AppointmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentController],
      providers: [AppointmentService],
    }).compile();

    appointmentController = app.get<AppointmentController>(AppointmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appointmentController.getHello()).toBe('Hello World!');
    });
  });
});
