import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';
import { IProduct } from '../schemas/models/product.interface';

@Injectable()
export class StockService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getStocks(limit: number, page: number) {
    return this.productRepository.getStocks(limit, page);
  }

  async getStockById(productId: string) {
    const product = await this.productRepository.getStockById(productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async createStock(product: IProduct) {
    return this.productRepository.createStock(product);
  }

  async updateStock(productId: string, stock: number) {
    return this.productRepository.updateStock(productId, stock);
  }

  async deleteStock(productId: string) {
    return this.productRepository.deleteStock(productId);
  }
}
