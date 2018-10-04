import { CartStore } from './../../store/cart.store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket: any = {};

  constructor(private route: Router, private cartStore: CartStore) {
  }

  ngOnInit() {
    this.cartStore.loadBasket();
  }

  confirmProduct(productDetails) {
    this.route.navigate(['/userDetails']);
  }

}
