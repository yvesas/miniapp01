import { Module } from '@nestjs/common';
import { UserService } from './use-case/user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
