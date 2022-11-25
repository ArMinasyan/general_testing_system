import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNumber, IsOptional } from 'class-validator';
import validationMessages from '../../../common/helpers/validation.messages';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail({}, { message: validationMessages.email })
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsBoolean({ message: validationMessages.boolean })
  with_token: boolean;
}

export class DeleteUserParamDto {
  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  @Type(() => Number)
  userId: number;
}
