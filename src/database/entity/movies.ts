import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'movies' })
export class User extends BaseEntity {
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
    cration_date: Date;
    @Column()
    duration: Date;
    @Column()
    released: Date;
    @Column()
    active: boolean;
}