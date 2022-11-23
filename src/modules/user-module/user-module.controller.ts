import { Controller } from '@nestjs/common';
import { UserModuleService } from './user-module.service';

@Controller('user-module')
export class UserModuleController {
  constructor(private readonly userModuleService: UserModuleService) {}
}
