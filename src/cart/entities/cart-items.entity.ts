import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cart } from './carts.entity';

@Entity()
export class CartItem {
  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
  cart: Cart;

  @Column({ name: 'product_id', type: 'uuid' })
  productId: string;

  @Column({ type: 'integer' })
  count: number;
}
