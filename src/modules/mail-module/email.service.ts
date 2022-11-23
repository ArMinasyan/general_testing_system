import { MailerService } from '@nestjs-modules/myarn add handlebarsailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
}
