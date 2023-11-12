import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Role } from './role';

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


  @OneToMany(() => Role, (role: Role) => role.user, { onDelete: 'CASCADE' })
  roles: Role[];

  @ManyToOne(() => User, user => user.updatedBy)
  @JoinColumn({ name: 'update_user' })
  updatedBy: User;
}