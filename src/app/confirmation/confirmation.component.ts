import { OrderStore } from './../store/order.store';
import { ConfirmationService } from './confirmation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [ConfirmationService]
})
export class ConfirmationComponent implements OnInit {

  reviewOrder: any;
  order: any;

  constructor(private confirmationService: ConfirmationService, private orderStore: OrderStore) {
  }

  ngOnInit() {
    this.confirmationService.getOrder().subscribe((response: any) => {
      this.reviewOrder = response.data;
    });
  }

  submit() {
    this.orderStore.submitOrder();
  }

}
