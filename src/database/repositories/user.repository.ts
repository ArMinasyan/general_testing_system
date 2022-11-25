import { DataSource, Repository } from 'typeorm';
import { UsersEntity } from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<UsersEntity> {
  constructor(private dataSource: DataSource) {
    super(UsersEntity, dataSource.createEntityManager());
  }
}
