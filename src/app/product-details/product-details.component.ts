import { ProductDetailsService } from 'src/app/product-details/product-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStore } from '../store/product.store';
import { CartStore } from './../store/cart.store';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ProductDetailsService]
})
export class ProductDetailsComponent implements OnInit {
  constructor(private cartStore: CartStore, private router: Router,
    private productDetailsService: ProductDetailsService,
    private productStore: ProductStore,
  ) {
  }

  ngOnInit() {
    this.productStore.getProductDetails();
  }

  goToBasket = function (product) {
    const { productName, price, contractLength, productSeller } = product;
    const cartPayload = { productName, price, contractLength, productSeller };
    cartPayload['productId'] = product.id;
    this.productDetailsService.addOrUpdateProductToCart(cartPayload).subscribe((data) => {
      delete data._id;
      this.cartStore.refreshCart(data);
      this.router.navigate(['/basket']);
    });
  };

}
