import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
@Entity({ name: 'purchase' })
export class Purchase extends BaseEntity {

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
  update_User: number
  @Column({ unique: false })
  last_seen: string;
  @Column({ unique: false })
  gender: string;
  @Column({ unique: false })
  active: number;
}