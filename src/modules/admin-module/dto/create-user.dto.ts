import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNumber } from 'class-validator';
import validationMessages from '../../../common/helpers/validation.messages';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail({}, { message: validationMessages.email })
  email: string;

  @ApiProperty()
  @IsBoolean({ message: validationMessages.boolean })
  withToken: boolean;
}

export class DeleteUserParamDto {
  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  @Type(() => Number)
  userId: number;
}
