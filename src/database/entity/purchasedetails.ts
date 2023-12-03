import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
@Entity({ name: 'purchase_details' })
export class PurchaseDet extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  product: string;
  @Column({ unique: true })
  order_num: string;
  @Column({ unique: false })
  creation_user: string;
  @Column({ unique: false })
  update_date: string;
}