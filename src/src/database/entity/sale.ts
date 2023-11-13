import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Movies } from './movies';

@Entity({ name: 'Sale' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: string;
    @Column()
    sale_start: string;
    @Column()
    sale_end: string;
    @Column()
    active: boolean;

    @ManyToOne(() => Movies, { eager: true })
    @JoinColumn({ name: 'name' })
    movie: Movies;

    @ManyToOne(() => Movies, { eager: true })
    @JoinColumn({ name: 'description' })
    movieDescription: Movies;

    @ManyToOne(() => Movies, { eager: true })
    @JoinColumn({ name: 'duration' })
    movieDuration: Movies;

    @ManyToOne(() => Movies, { eager: true })
    @JoinColumn({ name: 'released_date' })
    movieReleasedDate: Movies;
}