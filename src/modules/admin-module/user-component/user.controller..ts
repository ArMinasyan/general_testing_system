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
import { DeleteUserParamDto, CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

@ApiTags('Admin Users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

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
