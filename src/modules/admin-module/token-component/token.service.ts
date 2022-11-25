import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseService } from '../../../common/baseService';
import { TokenRepository } from '../../../database/repositories';

@Injectable()
export class TokenService extends BaseService {
  constructor(private readonly tokenRepository: TokenRepository) {
    super();
  }

  async generateToken(userId: number) {
    try {
      const token = await this.tokenRepository.save({
        user: userId,
      });

      return this.responseMessage({
        statusCode: HttpStatus.CREATED,
        data: token,
      });
    } catch (error) {
      this.responseMessage({ success: false, data: error });
    }
  }

  async deleteToken(tokenId: number) {
    try {
      const token = await this.tokenRepository.softRemove({
        id: tokenId,
      });

      return this.responseMessage({
        data: token,
      });
    } catch (error) {
      this.responseMessage({ success: false, data: error });
    }
  }

  async getTokensByUserId(userId: number) {
    try {
      const tokens = await this.tokenRepository.find({
        where: {
          user: userId,
        },
      });

      return this.responseMessage({
        data: tokens,
      });
    } catch (error) {
      this.responseMessage({ success: false, data: error });
    }
  }
}
