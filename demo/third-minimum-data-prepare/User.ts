import { Product } from './Product';

export class User {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public address: string,
  ) {}

  buy(product: Product) {
    return `User ${this.name} bought ${product.name}`;
  }
}
