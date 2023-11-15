import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: false })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: false })
  password: string;
  @Column({ unique: false })
  creation_date: Date;
  @Column({ unique: false })
  update_date: Date;
  @Column({ unique: false })
  last_seen: Date;
  @Column({ unique: false })
  gender: string;
  @Column({ unique: false })
  active: boolean;

  @OneToMany(() => User, user => user.updatedByid)
  @JoinColumn({ name: 'update_user', referencedColumnName: 'name' })
  updatedByid: User;

}