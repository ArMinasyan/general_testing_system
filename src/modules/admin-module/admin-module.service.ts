import { HttpStatus, Injectable } from '@nestjs/common';
import { DeleteUserParamDto, CreateUserDto } from './dto';
import { TokenRepository, UserRepository } from '../../database/repositories';
import responseMessage from '../../common/helpers/response-message';

@Injectable()
export class AdminModuleService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenRepository: TokenRepository,
  ) {}

  async createUser(payload: CreateUserDto) {
    try {
      const user = await this.userRepository.save({
        email: payload.email,
        ...(payload.with_token ? {} : {}),
      });

      return responseMessage({
        statusCode: HttpStatus.CREATED,
        data: user,
      });
    } catch (error) {
      responseMessage({ success: false, data: error });
    }
  }

  async deleteUser(param: DeleteUserParamDto) {
    try {
      const user = await this.userRepository.softRemove({
        id: param.userId,
      });

      return responseMessage({
        data: user,
      });
    } catch (error) {
      responseMessage({ success: false, data: error });
    }
  }

  async generateToken(userId: number) {
    try {
      const token = await this.tokenRepository.save({
        user: userId,
      });

      return responseMessage({
        statusCode: HttpStatus.CREATED,
        data: token,
      });
    } catch (error) {
      responseMessage({ success: false, data: error });
    }
  }

  async deleteToken(tokenId: number) {
    try {
      const token = await this.tokenRepository.softRemove({
        id: tokenId,
      });

      return responseMessage({
        data: token,
      });
    } catch (error) {
      responseMessage({ success: false, data: error });
    }
  }

  async getTokensByUserId(userId: number) {
    try {
      const tokens = await this.tokenRepository.find({
        where: {
          user: userId,
        },
      });

      return responseMessage({
        data: tokens,
      });
    } catch (error) {
      responseMessage({ success: false, data: error });
    }
  }
}
