import { Injectable } from '@angular/core';
import { observable, action, autorun } from 'mobx';

import { Cart } from '../models/Cart.model';


@Injectable()
export class CartStore {

  @observable cart: Cart;

  constructor() {
    if (localStorage.savedCart) {
      this.cart = JSON.parse(localStorage.savedCart);
    }
    autorun(() => {
      if (this.cart) {
        localStorage.savedCart = JSON.stringify(this.cart);
      }
    });
  }

  @action refreshCart(cart) {
    this.cart = new Cart();
    this.cart = cart;
  }


}
