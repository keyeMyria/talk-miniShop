import { OrderStore } from '../../store/order.store';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  reviewOrder: any;
  order: any;

  constructor(private orderService: OrderService, private orderStore: OrderStore) {
  }

  ngOnInit() {
    this.orderService.getOrder().subscribe((response: any) => {
      this.reviewOrder = response.data;
    });
  }

  submit() {
    this.orderStore.submitOrder();
  }

}
