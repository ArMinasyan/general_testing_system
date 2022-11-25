import { DataSource, Repository } from 'typeorm';
import { ConfigsEntity } from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigRepository extends Repository<ConfigsEntity> {
  constructor(private dataSource: DataSource) {
    super(ConfigsEntity, dataSource.createEntityManager());
  }
}
