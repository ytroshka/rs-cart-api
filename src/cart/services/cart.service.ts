import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../entities/carts.entity';
import { CartItem } from '../entities/cart-items.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async findByUserId(userId: string): Promise<Cart> {
    console.log('CartService findByUserId', userId);

    return this.cartRepository.findOne({
      where: { userId },
      relations: ['items'],
    });
  }

  async createByUserId(userId: string): Promise<Cart> {
    console.log('CartService createByUserId', userId);
    const newCart = new Cart();
    newCart.userId = userId;
    newCart.createdAt = new Date();
    newCart.updatedAt = new Date();
    newCart.status = 'OPEN';

    return this.cartRepository.save(newCart);
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    console.log('CartService findOrCreateByUserId', userId);
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return await this.createByUserId(userId);
  }

  async updateByUserId(userId: string, cartData: Partial<Cart>): Promise<Cart> {
    console.log('CartService updateByUserId', userId, cartData);

    const cart = await this.findOrCreateByUserId(userId);

    cart.updatedAt = new Date();
    cart.items = [...cartData.items];

    return this.cartRepository.save(cart);
  }

  async removeByUserId(userId): Promise<Cart> {
    console.log('CartService removeByUserId', userId);

    const cart = await this.cartRepository.findOne({
      where: { userId },
      relations: ['items'],
    });

    if (!cart) {
      throw new Error(`Cart not found for user with id: ${userId}`);
    }

    cart.status = 'ORDERED';
    cart.updatedAt = new Date();

    return this.cartRepository.save(cart);
  }
}
