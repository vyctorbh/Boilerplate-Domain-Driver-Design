import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { setEnvironment } from './environments';
import { HealthController } from './health/controller/health.controller'
import {
  TerminusModule
} from '@nestjs/terminus';

import {OrmConfig} from './ormconfig'

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setEnvironment(),
    }),
    TypeOrmModule.forRoot(),
    TerminusModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
