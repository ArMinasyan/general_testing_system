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
import {
  CreateConfigDto,
  UpdateConfigDto,
  UpdateConfigParamDto,
} from './config-action.dto';
import { ConfigService } from './config.service';

@ApiTags('Admin Config')
@Controller('admin/configs')
export class ConfigController {
  constructor(private readonly service: ConfigService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createConfig(@Body() payload: CreateConfigDto) {
    return this.service.createConfig(payload);
  }

  @HttpCode(HttpStatus.CREATED)
  @Put(':configId')
  updateConfig(
    @Param() param: UpdateConfigParamDto,
    @Body() payload: UpdateConfigDto,
  ) {
    return this.service.updateConfig(param.configId, payload);
  }
}
