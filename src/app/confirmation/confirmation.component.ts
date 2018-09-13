import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Product } from 'src/app/models/product-details.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  productDetails: any;

  constructor(private store: Store<AppState>) {
    store.select('product').subscribe((data: Product) => {
      this.productDetails = data;
    });
  }

  ngOnInit() { }

}
