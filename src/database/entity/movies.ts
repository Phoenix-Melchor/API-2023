import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { User } from './user';

@Entity({ name: 'movies' })
export class Movies extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    price: string;
    @Column()
    category: string;
    @Column()
    studio: string;
    @Column()
    stock: Number;
    @Column()
    measure: string;
    @Column()
    creation_date: Date;
    @Column()
    duration: Date;
    @Column()
    released_date: Date;
    @Column()
    active: boolean;

    //@ManyToOne(() => User, user => user.updatedByid)
    @JoinColumn({ name: 'update_user' })
    updatedBy: User;


}