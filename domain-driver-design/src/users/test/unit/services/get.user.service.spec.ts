import { Test } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GetUserService } from '../../../services/get.user.service';
import { User } from '../../../domain/user.entity';

describe('GetUserService', () => {
    let service: GetUserService;
    let repositoryMock: Repository<User>;
    beforeAll(async () => {
        const app = await Test.createTestingModule({
            providers: [
                GetUserService,
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository,
                },
            ],
        }).compile();

        service = app.get<GetUserService>(GetUserService);
        repositoryMock = app.get<Repository<User>>(getRepositoryToken(User));
    });

    describe('findById', () => {
        it('should find user by id', async () => {
            const user: User = {
                id: '61474e5084a30eabb07347b3',
                name: 'Victor Teixeira',
                email: 'victorteixeira@falconi.com',
            };
            jest.spyOn(repositoryMock, 'findOne').mockResolvedValueOnce(user);
            expect(await service.getById(user.id)).toEqual(user);
            expect(repositoryMock.findOne).toBeCalled();
        });
    });
});
