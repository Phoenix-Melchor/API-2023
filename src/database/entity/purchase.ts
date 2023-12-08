import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
@Entity({ name: 'purchase' })
export class Purchase extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  description: string;
  @Column({ unique: true })
  client_name: string;
  @Column({ unique: false })
  total: string;
  @Column({ unique: false })
  total_products: string;
  @Column({ unique: false })
  creation_date: string;
  @Column({ unique: false })
  creation_user: number
  @Column({ unique: false })
  update_date: string;
  @Column({ unique: false })
  update_user: string;
  @Column({ unique: false })
  active: number;
  @Column({unique: false})
  purchase_details: number;
}