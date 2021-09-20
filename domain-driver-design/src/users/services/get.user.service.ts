import { Injectable, Inject, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { User } from '../domain/user.entity';
import { UserDomain } from '../domain/user.domain';
import { IGetUserService } from '../interfaces/services/get.user.service.interface';

@Injectable()
export class GetUserService implements IGetUserService {
    private readonly logger = new Logger(GetUserService.name);
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    async getById(id: string): Promise<UserDomain> {
        this.logger.log(`Get User ${id}`);
        return this.usersRepository.findOne(id);
    }

    async getAll(): Promise<UserDomain[]> {
        this.logger.log(`Get User All`);
        return this.usersRepository.find();
    }  
}
