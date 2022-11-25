import { Module } from '@nestjs/common';

import {
  ConfigRepository,
  TokenRepository,
  UserRepository,
} from '../../database/repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsEntity, UsersEntity } from '../../database/entities';
import { TokenController, TokenService } from './token-component';
import { ConfigController, ConfigService } from './config-component';
import { UserController, UserService } from './user-component';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity, TokenRepository, ConfigsEntity]),
  ],
  controllers: [UserController, TokenController, ConfigController],
  providers: [
    TokenService,
    ConfigService,
    UserService,
    UserRepository,
    TokenRepository,
    ConfigRepository,
  ],
})
export class AdminModule {}
