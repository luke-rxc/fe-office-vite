import { subDays, subHours } from 'date-fns';
import type { Product } from '../schemas/product';

const now = new Date();

class ProductsApi {
  getProducts(): Promise<Product[]> {
    const products: Product[] = [
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: 1,
        image: '/static/mock-images/products/product_1.jpeg',
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Charlie Tulip Dress',
        price: Math.random() * 10,
        quantity: 85,
        updatedAt: subHours(now, 6).getTime(),
        variants: 2,
      },
      {
        id: '5ece2c0d16f70bff2cf86cd8',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: 2,
        image: '/static/mock-images/products/product_2.jpeg',
        inventoryType: 'out_of_stock',
        isAvailable: false,
        isShippable: true,
        name: 'Kate Leopard Dress',
        price: 95.0,
        quantity: 0,
        updatedAt: subDays(subHours(now, 8), 2).getTime(),
        variants: 1,
      },
      {
        id: '5ece2c123fad30cbbff8d060',
        attributes: ['Variety of styles'],
        category: 'jewelry',
        currency: '$',
        createdAt: 3,
        image: null,
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Layering Bracelets Collection',
        price: 155.0,
        quantity: 48,
        updatedAt: subDays(subHours(now, 2), 1).getTime(),
        variants: 5,
      },
      {
        id: '5ece2c1be7996d1549d94e34',
        attributes: ['Polyester and Spandex'],
        category: 'blouse',
        currency: '$',
        createdAt: 4,
        image: '/static/mock-images/products/product_4.jpeg',
        inventoryType: 'limited',
        isAvailable: false,
        isShippable: true,
        name: 'Flared Sleeve Floral Blouse',
        price: 17.99,
        quantity: 5,
        updatedAt: subDays(subHours(now, 7), 1).getTime(),
        variants: 1,
      },
    ];

    return Promise.resolve(products);
  }
}

export const productApi = new ProductsApi();
