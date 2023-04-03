import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Cart } from '../../cart/entities/carts.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @OneToOne(() => Cart, (cart) => cart.id)
  cart: Cart;

  @Column({ type: 'json', nullable: true })
  payment: any;

  @Column({ type: 'json', nullable: true })
  delivery: any;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @Column({
    type: 'enum',
    enum: ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED'],
    default: 'PENDING',
  })
  status: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  total: number;
}
