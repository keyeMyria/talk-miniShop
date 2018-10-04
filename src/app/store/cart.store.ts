import { GET_BASKET } from './../graphql/graphql-config';
import { Apollo } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { observable, action, autorun, runInAction } from 'mobx';

import { Cart } from '../models/Cart.model';


@Injectable()
export class CartStore {

  @observable cart: any;
  @observable cartId: string;

  constructor(private router: Router, private http: HttpClient, private apollo: Apollo) {
    if (localStorage.cartId) {
      this.cartId = localStorage.cartId;
    }
    autorun(() => {
      if (this.cartId) {
        localStorage.cartId = this.cartId;
        this.router.navigate(['/basket']);
      }
    });
  }

  @action saveCart(cartPayload) {
    this.cartId = undefined;
    this.addOrUpdateProductToCart(cartPayload).subscribe((response: any) => {
      runInAction(() => {
        this.cartId = response.cartId;
      });
    });
  }

  @action loadBasket() {
    this.cart = undefined;
    return this.apollo.watchQuery({
      query: GET_BASKET,
      variables: {
        cartId: this.cartId
      }
    }).valueChanges.subscribe((response: any) => {
      runInAction(() => {
        this.cart = response.data.basket;
      });
    });
  }

  addOrUpdateProductToCart(cartPayload) {
    const url = environment.cartUrl;
    if (this.cart && this.cart.cartId) {
      cartPayload.cartId = this.cart.cartId;
      return this.http.put(url, cartPayload);
    }
    return this.http.post(url, cartPayload);
  }


}
