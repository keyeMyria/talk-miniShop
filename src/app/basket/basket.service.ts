import { CartStore } from './../store/cart.store';
import { GET_BASKET } from './../graphql/graphql-config';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable()
export class BasketService {

  constructor(private apollo: Apollo, private cartStore: CartStore) { }

  getBasket() {
    return this.apollo.watchQuery({
      query: GET_BASKET,
      variables: {
        cartId: this.cartStore.cart.cartId
      }
    }).valueChanges;
  }



}
