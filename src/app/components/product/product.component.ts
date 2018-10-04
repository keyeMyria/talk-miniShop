import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStore } from '../../store/product.store';
import { CartStore } from '../../store/cart.store';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private cartStore: CartStore, private router: Router,
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
    this.cartStore.saveCart(cartPayload);
  };

}
