import { Module } from '@nestjs/common';
import { AdminModuleService } from './admin-module.service';
import {
  ConfigsController,
  TokensController,
  UsersController,
} from './controllers';
import {
  ConfigRepository,
  TokenRepository,
  UserRepository,
} from '../../database/repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsEntity, UsersEntity } from '../../database/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity, TokenRepository, ConfigsEntity]),
  ],
  controllers: [UsersController, TokensController, ConfigsController],
  providers: [
    AdminModuleService,
    UserRepository,
    TokenRepository,
    ConfigRepository,
  ],
})
export class AdminModuleModule {}
