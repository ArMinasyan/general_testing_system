import { Controller } from '@nestjs/common';
import { AdminModuleService } from './admin-module.service';

@Controller('admin-module')
export class AdminModuleController {
  constructor(private readonly adminModuleService: AdminModuleService) {}
}
