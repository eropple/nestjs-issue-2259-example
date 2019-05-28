import * as Bunyan from "bunyan";
import { Controller, Get, Scope } from '@nestjs/common';
import { Logger } from "@eropple/nestjs-bunyan/dist/injector-decorations";

import { AppService } from './app.service';

@Controller({ scope: Scope.REQUEST })
export class AppController {
  constructor(
    @Logger() requestLogger: Bunyan,
    private readonly appService: AppService
  ) {
    console.log("AppController instantiated. requestLogger: ", requestLogger);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
