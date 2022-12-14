import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import validationMessages from '../../../common/helpers/validation.messages';
import { Type } from 'class-transformer';
import { DeleteUserParamDto } from '../user-component/create-user.dto';

export class GenerateTokenDto {
  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  userId: number;
}

export class GetTokensByUserIdDto extends DeleteUserParamDto {}

export class DeleteTokenParamDto {
  @ApiProperty()
  @IsNumber({}, { message: validationMessages.number })
  @Type(() => Number)
  tokenId: number;
}
