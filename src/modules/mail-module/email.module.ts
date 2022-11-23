import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { EmailService } from './email.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          auth: {
            type: 'OAuth2',
            user: configService.get<string>('google.user'),
            clientId: configService.get<string>('google.client_id'),
            clientSecret: configService.get<string>('google.client_secret'),
            accessToken: configService.get<string>('google.access_token'),
            refreshToken: configService.get<string>('google.refresh_token'),
          },
        },
        template: {
          adapter: new HandlebarsAdapter(null, { inlineCssEnabled: true }),
          dir: join(__dirname, 'templates'),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
