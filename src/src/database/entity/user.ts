import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'user' })
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

  @ManyToOne(() => User, user => user.updatedByid)
  @JoinColumn({ name: 'update_user', referencedColumnName: 'name' })
  updatedByid: User;

}