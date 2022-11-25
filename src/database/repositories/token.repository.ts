import { DataSource, Repository } from 'typeorm';
import { TokensEntity } from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenRepository extends Repository<TokensEntity> {
  constructor(private dataSource: DataSource) {
    super(TokensEntity, dataSource.createEntityManager());
  }
}
