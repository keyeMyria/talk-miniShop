import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../models/product-details.model';
import { AppState } from './../app.state';
import * as productActions from '../actions/product-details.action';
import { ProductDetailsService } from '../product-details/product-details.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: object;
  constructor(private productDetailsService: ProductDetailsService, private route: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.productDetailsService.getProductDetails().subscribe((data: Product) => {
      if (  environment.production) {
        this.productDetails = this.productDetailsService.transformProductDetails(data);
      } else {
        this.productDetails = data;
      }
    });
  }

  goToBasket = function (product) {
    this.store.dispatch(new productActions.SaveProductDetails(product));
    this.route.navigate(['/basket', product.productId]);
  };

}
