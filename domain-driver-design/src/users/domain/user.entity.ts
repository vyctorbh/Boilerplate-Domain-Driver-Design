import { Entity, ObjectIdColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    //@PrimaryGeneratedColumn('uuid')
    //userId: string;

    @ObjectIdColumn()
    _id: string;

    @Column({ length: 100 })
    fullName: string;

    @Column({ length: 100 })
    email: string;

    @Column()
    password: string;
}
