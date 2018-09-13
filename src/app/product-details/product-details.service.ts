import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProductDetails () {
    const url = 'http://localhost:2000/get-products';
    // const url = 'assets/stubs/getProductDetails.json';
    return this.http.get(url);
  }

}
