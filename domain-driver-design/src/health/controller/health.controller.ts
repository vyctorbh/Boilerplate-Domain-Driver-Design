import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, UseInterceptors } from '@nestjs/common';
import {
    HealthCheckService,
    HealthCheck,
    TypeOrmHealthIndicator
  } from '@nestjs/terminus';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    @InjectConnection()
    private defaultConnection: Connection,
  ) {}

  @Get()
  @HealthCheck()
  readiness() {
    return this.health.check([
      async () => this.db.pingCheck('db1Connection', { connection: this.defaultConnection }),
    ]);
  }
}