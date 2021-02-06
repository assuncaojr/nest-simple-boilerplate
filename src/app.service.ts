/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { ApiSettingsService } from './utils/api-settings.service';

@Injectable()
export class AppService {
  constructor(private config: ApiSettingsService){}

  get() {
    return {
      projectName: this.config.appName,
      projectDescription: this.config.appDescrition,
      datetime: new Date(),
      success: true,
      version: process.env.npm_package_version,
    };
  }
}
