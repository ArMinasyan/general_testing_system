import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminModuleModule } from './modules/admin-module/admin-module.module';
import { AuthModuleModule } from './modules/auth-module/auth-module.module';
import { UserModuleModule } from './modules/user-module/user-module.module';
import configuration from './configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import {
  AnswersEntity,
  ConfigsEntity,
  QuestionsEntity,
  ResultsEntity,
  TokensEntity,
  UsersEntity,
  UserTestConfigXref,
} from './database/entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get<string>('postgres.host'),
        port: configService.get<number>('postgres.port'),
        username: configService.get<string>('postgres.username'),
        password: configService.get<string>('postgres.password'),
        database: configService.get<string>('postgres.db'),
        type: 'postgres',
        synchronize: configService.get<boolean>('postgres.sync'),
        logging: configService.get<boolean>('postgres.logging'),
        entities: [
          UsersEntity,
          TokensEntity,
          ResultsEntity,
          ConfigsEntity,
          QuestionsEntity,
          AnswersEntity,
          UserTestConfigXref,
        ],
      }),
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: {
          algorithm: 'HS256',
          expiresIn: configService.get<string>('jwt.expires'),
        },
      }),
    }),
    AdminModuleModule,
    AuthModuleModule,
    UserModuleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
