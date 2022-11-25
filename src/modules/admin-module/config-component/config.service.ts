import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../common/baseService';
import { ConfigRepository } from '../../../database/repositories';
import { CreateConfigDto, UpdateConfigDto } from './config-action.dto';

@Injectable()
export class ConfigService extends BaseService {
  constructor(private readonly configRepository: ConfigRepository) {
    super();
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
