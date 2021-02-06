import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Environment } from '../settings';

@Injectable()
export class ApiSettingsService {
  constructor(private config: ConfigService){}

  get appPort (): number {
    return +this.config.get('port');
  }

  get appName (): string {
    return this.config.get('projectName');
  }

  get appDescrition (): string {
    return this.config.get('projectDescription');
  }

  get isProductionEnv (): boolean {
    return this.config.get('env') === Environment.PRODUCTION;
  }
}
