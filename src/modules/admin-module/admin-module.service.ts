import { HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateConfigDto,
  CreateUserDto,
  DeleteUserParamDto,
  UpdateConfigDto,
} from './dto';
import {
  ConfigRepository,
  TokenRepository,
  UserRepository,
} from '../../database/repositories';
import { BaseService } from '../../common/baseService';

@Injectable()
export class AdminModuleService extends BaseService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenRepository: TokenRepository,
    private readonly configRepository: ConfigRepository,
  ) {
    super();
  }

  async createUser(payload: CreateUserDto) {
    try {
      const user = await this.userRepository.save({
        email: payload.email,
        ...(payload.withToken ? {} : {}),
      });

      return this.responseMessage({
        statusCode: HttpStatus.CREATED,
        data: user,
      });
    } catch (error) {
      this.responseMessage({ success: false, data: error });
    }
  }

  async deleteUser(param: DeleteUserParamDto) {
    try {
      const user = await this.userRepository.softRemove({
        id: param.userId,
      });

      return this.responseMessage({
        data: user,
      });
    } catch (error) {
      this.responseMessage({ success: false, data: error });
    }
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

  async createConfig(payload: CreateConfigDto) {
    try {
      const config = await this.configRepository.save(this.toEntity(payload));

      return this.responseMessage({
        data: config,
      });
    } catch (error) {
      this.responseMessage({ success: false, data: error });
    }
  }

  async updateConfig(configId: number, payload: UpdateConfigDto) {
    try {
      const config = await this.configRepository.update(
        {
          id: configId,
        },
        this.toEntity(payload),
      );

      return this.responseMessage({
        data: config,
      });
    } catch (error) {
      this.responseMessage({ success: false, data: error });
    }
  }
}
