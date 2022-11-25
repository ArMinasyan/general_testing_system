import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';
import validationMessages from '../../../common/helpers/validation.messages';
import { Type } from 'class-transformer';

export class CreateConfigDto {
  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  questionCount: number;

  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  maxPoint: number;

  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  passPoint: number;

  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  time: number;

  @ApiProperty({
    type: [Number],
  })
  @IsArray({ message: validationMessages.number })
  questionTypes: number[];
}

export class UpdateConfigDto extends PartialType(CreateConfigDto) {}

export class UpdateConfigParamDto {
  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  @Type(() => Number)
  configId: number;
}
