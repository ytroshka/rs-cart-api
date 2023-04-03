import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from '../order';
import { Order } from '../order/entities/order.entity';

import { CartController } from './cart.controller';
import { CartItem } from './entities/cart-items.entity';
import { Cart } from './entities/carts.entity';
import { CartService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem, Order])],
  providers: [CartService, OrderService],
  controllers: [CartController],
})
export class CartModule {}
