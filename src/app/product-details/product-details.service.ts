import { CartStore } from './../store/cart.store';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient, private cartStore: CartStore) { }


  addOrUpdateProductToCart(cartPayload) {
    const url = environment.cartUrl;
    if (this.cartStore.cart && this.cartStore.cart.cartId) {
      cartPayload.cartId = this.cartStore.cart.cartId;
      return this.http.put(url, cartPayload);
    }
    return this.http.post(url, cartPayload);
  }


}
