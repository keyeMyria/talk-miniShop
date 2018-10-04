import { GET_PRODUCTS } from './../graphql/graphql-config';
import { Apollo } from 'apollo-angular';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, runInAction, action } from 'mobx';


@Injectable()
export class ProductStore {

  @observable products: Product[];

  constructor(private http: HttpClient, private apollo: Apollo) { }


  @action async getProductDetails() {
    this.products = [];
    this.apollo.watchQuery({
      query: GET_PRODUCTS
    }).valueChanges.subscribe((response: any) => {
      runInAction(() => {
        this.products = response.data.products;
      });
    });
  }

}
