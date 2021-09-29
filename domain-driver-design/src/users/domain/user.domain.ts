import { IsString, IsEmail } from 'class-validator';

export class UserDomain {
    @IsString()
    readonly name: string;

    @IsEmail()
    readonly email: string;
}
