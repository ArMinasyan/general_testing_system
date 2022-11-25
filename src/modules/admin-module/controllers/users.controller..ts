import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteUserParamDto, CreateUserDto } from '../dto';
import { AdminModuleService } from '../admin-module.service';

@ApiTags('Admin Users')
@Controller('users')
export class UsersController {
  constructor(private readonly service: AdminModuleService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.service.createUser(payload);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':userId')
  deleteUser(@Param() param: DeleteUserParamDto) {
    return this.service.deleteUser(param);
  }
}
