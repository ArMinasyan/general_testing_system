import { Module } from '@nestjs/common';
import { AdminModuleService } from './admin-module.service';
import { TokensController, UsersController } from './controllers';
import { TokenRepository, UserRepository } from '../../database/repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, TokenRepository])],
  controllers: [UsersController, TokensController],
  providers: [AdminModuleService, UserRepository, TokenRepository],
})
export class AdminModuleModule {}
