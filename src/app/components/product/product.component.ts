import { ProductService } from 'src/app/components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStore } from '../../store/product.store';
import { CartStore } from '../../store/cart.store';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(private cartStore: CartStore, private router: Router,
    private productService: ProductService,
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
    this.productService.addOrUpdateProductToCart(cartPayload).subscribe((data) => {
      delete data._id;
      this.cartStore.refreshCart(data);
      this.router.navigate(['/basket']);
    });
  };

}
