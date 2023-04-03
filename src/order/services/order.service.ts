import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async findOrderById(id: string): Promise<Order> {
    console.log('OrderService findOrderById', id);
    return this.orderRepository.findOne({ where: { id } });
  }

  create(orderData: Order): Promise<Order> {
    console.log('OrderService create', orderData);

    const order = new Order();
    order.id = v4();
    order.userId = orderData.userId;
    order.cart = orderData.cart;
    order.payment = orderData.payment;
    order.delivery = orderData.delivery;
    order.comments = orderData.comments;
    order.status = 'PENDING';
    order.total = orderData.total;

    return this.orderRepository.save(order);
  }

  async update(id: string, updatedOrder: Partial<Order>): Promise<Order> {
    console.log('OrderService update', id, updatedOrder);

    let order = await this.findOrderById(id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    order = {
      ...order,
      ...updatedOrder,
    };
    return this.orderRepository.save(order);
  }
}
