import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  // Stores current products in the cart.
  items = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
