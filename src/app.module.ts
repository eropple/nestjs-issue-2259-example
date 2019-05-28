import { Module } from '@nestjs/common';
import { LoggingModule } from "@eropple/nestjs-bunyan";

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    LoggingModule.forRoot({})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
