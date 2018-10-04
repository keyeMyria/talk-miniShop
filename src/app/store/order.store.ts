import { GET_ORDER } from './../graphql/graphql-config';
import { Apollo } from 'apollo-angular';
import { UserStore } from './user.store';
import { CartStore } from './cart.store';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, action, autorun, runInAction, computed } from 'mobx';

import { Order } from '../models/Order.model';


@Injectable()
export class OrderStore {

  @observable order: Order;
  @observable reviewOrder: any;

  constructor(private http: HttpClient, private cartStore: CartStore, private userStore: UserStore, private apollo: Apollo) {
  }

  @computed get orderId() {
    return ('M' + this.order.orderId.substring(1, 9)).toUpperCase();
  }


  @action submitOrder() {
    this.order = new Order();
    const url = environment.orderUrl;
    const payload = { 'productId': this.cartStore.cart.cart.productId, 'userId': this.userStore.userId };
    this.http.post(url, payload).subscribe((resp: any) => {
      runInAction(() => {
        this.order = resp;
      });
      this.clearStoreAndSession();
    });
  }

  @action getOrder() {
    return this.apollo.watchQuery({
      query: GET_ORDER,
      variables: {
        cartId: this.cartStore.cartId,
        userId: this.userStore.userId
      }
    }).valueChanges.subscribe((response: any) => {
      runInAction(() => {
        this.reviewOrder = response.data;
      });
    });
  }

  clearStoreAndSession() {
    this.cartStore.cart = undefined;
    this.cartStore.cartId = undefined;
    this.userStore.user = undefined;
    this.userStore.userId = undefined;
    localStorage.removeItem('cartId');
    localStorage.removeItem('userId');
  }

}
