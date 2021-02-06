/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get() {
    return {
      projectName: process.env.PROJECT_NAME,
      projectDescription: process.env.PROJECT_DESCRIPTION,
      datetime: new Date(),
      success: true,
      version: process.env.npm_package_version,
    };
  }
}
