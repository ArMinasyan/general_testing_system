import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminModuleService } from '../admin-module.service';
import {
  DeleteTokenParamDto,
  GenerateTokenDto,
  GetTokensByUserIdDto,
} from '../dto';

@ApiTags('Admin Tokens')
@Controller('admin/tokens')
export class TokensController {
  constructor(private readonly userService: AdminModuleService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getTokensByUserId(@Query() query: GetTokensByUserIdDto) {
    return this.userService.getTokensByUserId(query.userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('generate')
  generateToken(@Body() payload: GenerateTokenDto) {
    return this.userService.generateToken(payload.userId);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':tokenId')
  deleteToken(@Param() param: DeleteTokenParamDto) {
    return this.userService.deleteToken(param.tokenId);
  }
}
