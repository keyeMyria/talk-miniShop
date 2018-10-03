import { UserStore } from './user.store';
import { CartStore } from './cart.store';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, action, autorun } from 'mobx';

import { Order } from '../models/Order.model';


@Injectable()
export class OrderStore {

  @observable order: Order;

  constructor(private http: HttpClient, private cartStore: CartStore, private userStore: UserStore) {
  }

  @action submitOrder() {
    this.order = new Order();
    const url = environment.orderUrl;
    const payload = { 'productId': this.cartStore.cart.cart.productId, 'userId': this.userStore.user.userId };
    this.http.post(url, payload).subscribe((resp: any) => {
      this.order = resp;
      this.cartStore.cart = undefined;
      this.userStore.user = undefined;
      localStorage.removeItem('savedCart');
      localStorage.removeItem('user');
    });
  }


}
