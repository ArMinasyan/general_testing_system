import { IsEmail, IsNumber } from 'class-validator';
import validationMessages from '../../../common/helpers/validation.messages';
import { ApiProperty } from '@nestjs/swagger';

export class InviteUserDto {
  @ApiProperty()
  @IsEmail({}, { message: validationMessages.email })
  email: string;

  @ApiProperty()
  @IsNumber()
  configId: number;
}
