import { ProductRepository } from '../product.repository';
import { Product } from 'src/stock/schemas/product.schema';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

export class ProductMongooseRepository extends ProductRepository {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {
    super();
  }

  async createStock(product) {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }
  async getStocks(limit, page) {
    const offset = (page - 1) * limit;
    return this.productModel.find().skip(offset).limit(limit).exec();
  }
  async getStockById(productId) {
    return this.productModel.findById(productId);
  }
  async updateStock(productId, stock) {
    await this.productModel.updateOne(productId, { quantity: stock }).exec();
  }
  async deleteStock(productId) {
    await this.productModel.deleteOne(productId);
  }
}
