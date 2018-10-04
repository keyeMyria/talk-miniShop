import { OrderStore } from '../../store/order.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  constructor(private orderStore: OrderStore) {
  }

  ngOnInit() {
    this.orderStore.getOrder();
  }

  submit() {
    this.orderStore.submitOrder();
  }

}
