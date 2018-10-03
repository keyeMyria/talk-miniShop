import { UserStore } from '../../store/user.store';
import { CartStore } from '../../store/cart.store';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ORDER } from '../../graphql/graphql-config';

@Injectable()
export class OrderService {

  constructor(private apollo: Apollo, private cartStore: CartStore, private userStore: UserStore) { }

  getOrder() {
    return this.apollo.watchQuery({
      query: GET_ORDER,
      variables: {
        cartId: this.cartStore.cart.cartId,
        userId: this.userStore.user.userId
      }
    }).valueChanges;
  }



}
