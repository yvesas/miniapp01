import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentController } from './appointment.controller';
import { AppService } from '../app.service';

describe('AppointmentController', () => {
  let appointmentController: AppointmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentController],
      providers: [AppService],
    }).compile();

    appointmentController = app.get<AppointmentController>(AppointmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appointmentController.getHello()).toBe('Hello World!');
    });
  });
});
