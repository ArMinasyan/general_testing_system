import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, DeleteUserParamDto } from './create-user.dto';
import { UserRepository } from '../../../database/repositories';
import { BaseService } from '../../../common/baseService';

@Injectable()
export class UserService extends BaseService {
  constructor(private readonly userRepository: UserRepository) {
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
}
