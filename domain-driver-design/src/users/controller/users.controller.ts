import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, UseInterceptors } from '@nestjs/common';
import { UserDomain } from '../domain/user.domain';
import { TYPES } from '../interfaces/types';
import { ICreateUserApplication } from '../interfaces/applications/create.user.application.interface';
import { ValidationPipe } from '../../common/validation.pipe';
import { IGetUserApplication } from '../interfaces/applications/get.user.application.interface';
import { SentryInterceptor } from '../../common/sentry.interceptor';

@UseInterceptors(SentryInterceptor)
@Controller('users')
export class UsersController {
    constructor(
        @Inject(TYPES.applications.ICreateUserApplication) private createUserApp: ICreateUserApplication,
        @Inject(TYPES.applications.IGetUserApplication) private getUserApp: IGetUserApplication,
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('/create')
    async create(@Res() res, @Body() userDomain: UserDomain) {
        const stock = await this.createUserApp.create(userDomain);
        return res.status(HttpStatus.OK).json(stock);
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const user = await this.getUserApp.getById(id);
        return user;
    }

    @Get()
    async find() {
        const user = await this.getUserApp.getAll();
        return user;
    }
}
