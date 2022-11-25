import {
  IsBoolean,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import validationMessages from '../../../common/helpers/validation.messages';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmptyString } from '../../../common/customValidators';
import { Type } from 'class-transformer';

class AnswerDto {
  @ApiProperty()
  @IsEmptyString({ message: validationMessages.required })
  answer: string;

  @ApiProperty()
  @IsBoolean({ message: validationMessages.boolean })
  isCorrect: boolean;
}

class UpdateAnswerDto extends PartialType(AnswerDto) {
  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  answerId: number;
}

export class QuestionDto {
  @ApiProperty()
  @IsEmptyString({ message: validationMessages.required })
  question: string;

  @ApiProperty({
    type: [AnswerDto],
  })
  @ValidateNested()
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}

export class UpdateQuestionDto {
  @ApiProperty()
  @IsEmptyString({ message: validationMessages.required })
  @IsOptional()
  question?: string;

  @ApiProperty({
    type: [UpdateAnswerDto],
  })
  @ValidateNested()
  @Type(() => UpdateAnswerDto)
  @IsOptional()
  answers: UpdateAnswerDto[];
}

export class QuestionParamDto {
  @ApiProperty()
  @IsEmptyString({ message: validationMessages.required })
  questionId: number;
}
