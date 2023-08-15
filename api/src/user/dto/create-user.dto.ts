import { ApiProperty } from '@nestjs/swagger';
import { UserData } from '../entities/user-data';

export class CreateUserDto implements UserData{
  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;
  
  @ApiProperty()
  lastName: string;
 
  @ApiProperty()
  phone: string;

  @ApiProperty()
  countryCode?: string;

  @ApiProperty()
  password: string;
}