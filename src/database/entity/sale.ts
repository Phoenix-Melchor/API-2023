import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'Sale' })
export class Sale extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;
    @Column({ unique: true })
    description: string;
    @Column({unique: false})
    price: string;
    @Column({unique: false})
    sale_start: string;
    @Column({unique: false})
    sale_end: string;
    @Column({ unique: false })
    duration: string;
    @Column({ unique: false })
    release_date: string;
    @Column({unique: false})
    active: number;
}