import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
@Entity({ name: 'users' })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: false })
  password: string;
  @Column({ unique: false })
  creation_date: string;
  @Column({ unique: false })
  update_date: string;
  @Column({ unique: false })
  update_User: string
  @Column({ unique: false })
  last_seen: string;
  @Column({ unique: false })
  gender: string;
  @Column({ unique: false })
  active: number;

  /*@ManyToOne(() => User, user => user.updatedByid)
  @JoinColumn({ name: 'update_user', referencedColumnName: 'name' })
  updatedByid: User;*/
}