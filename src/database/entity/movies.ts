import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
@Entity({ name: 'movies' })
export class Movies extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false })
    name: string;
    @Column({ unique: false })
    description: string;
    @Column({ unique: false })
    price: string;
    @Column({ unique: false })
    category: string;
    @Column({ unique: false })
    studio: string;
    @Column({ unique: false })
    stock: Number;
    @Column({ unique: false })
    measure: string;
    @Column({ unique: false })
    creation_date: string;
    @Column({ unique: false })
    update_User: number
    @Column({ unique: false })
    duration: string;
    @Column({ unique: false })
    release_date: string;
    @Column({ unique: false })
    active: number;

    //@ManyToOne(() => User, user => user.updatedByid)
    /*@JoinColumn({ name: 'update_user' })
    updatedBy: User;*/


}