import { IProduct } from '../schemas/models/product.interface';

export abstract class ProductRepository {
  abstract createStock(product: IProduct): Promise<IProduct>;
  abstract getStocks(limit: number, page: number): Promise<IProduct[]>;
  abstract getStockById(productId: string): Promise<IProduct>;
  abstract updateStock(productId: string, stock: number);
  abstract deleteStock(productId: string);
}
