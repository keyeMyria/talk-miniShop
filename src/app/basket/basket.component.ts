import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../models/product-details.model';
import { AppState } from './../app.state';
// import * as productActions from '../actions/product-details.action';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  productDetails: Product;

  constructor(private route: Router, private store: Store<AppState>) {
    store.select('product').subscribe((data: Product) => {
      this.productDetails = data;
    });
  }

  ngOnInit() {
  }

  confirmProduct(productDetails) {
    this.route.navigate(['/confirm']);
  }

}
