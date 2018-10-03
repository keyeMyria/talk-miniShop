import { BasketService } from './basket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  providers: [BasketService]
})
export class BasketComponent implements OnInit {
  basket: any = {};

  constructor(private route: Router, private basketService: BasketService) {
  }

  ngOnInit() {
    this.basketService.getBasket().subscribe((response: any) => {
      this.basket = response.data.basket;
      console.log(this.basket);
    });
  }

  confirmProduct(productDetails) {
    this.route.navigate(['/userDetails']);
  }

}
