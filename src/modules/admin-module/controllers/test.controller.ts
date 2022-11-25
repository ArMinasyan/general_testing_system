import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuestionDto, QuestionParamDto, UpdateQuestionDto } from '../dto';

@ApiTags('Admin Question')
@Controller('admin/tests/questions')
export class TestController {
  constructor() {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  addQuestion(@Body() payload: QuestionDto) {}

  @HttpCode(HttpStatus.OK)
  @Put(':questionId')
  updateQuestion(
    @Body() payload: UpdateQuestionDto,
    @Param() param: QuestionParamDto,
  ) {}
}
