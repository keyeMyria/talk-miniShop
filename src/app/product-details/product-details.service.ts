import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProductDetails() {
    const url = environment.productUrl;
    return this.http.get(url);
  }

  transformProductDetails(data) {
    return data.reduce(function (products, obj, id, arr) {
      if (products) {
        const product: any = obj.$v;
        products.push(
          {
            productName: product.productName.$v,
            price: product.price.$v,
            contractLength: product.contractLength.$v,
            features: product.features.$v,
            imageName: product.imageName.$v,
            productId: product.id.$v,
            productSeller: product.productSeller.$v
          }
        );
      } else {
        products = [];
      }
      return products;
    }, []);
  }

}
