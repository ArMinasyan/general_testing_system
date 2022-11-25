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
import {
  DeleteTokenParamDto,
  GenerateTokenDto,
  GetTokensByUserIdDto,
} from './token-action.dto';
import { TokenService } from './token.service';

@ApiTags('Admin Tokens')
@Controller('admin/tokens')
export class TokenController {
  constructor(private readonly service: TokenService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getTokensByUserId(@Query() query: GetTokensByUserIdDto) {
    return this.service.getTokensByUserId(query.userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('generate')
  generateToken(@Body() payload: GenerateTokenDto) {
    return this.service.generateToken(payload.userId);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':tokenId')
  deleteToken(@Param() param: DeleteTokenParamDto) {
    return this.service.deleteToken(param.tokenId);
  }
}
