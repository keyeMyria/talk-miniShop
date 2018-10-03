import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductDetailsService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
  }));

  it('should be created', inject([HttpTestingController, ProductService], (
    httpMock: HttpTestingController,
    productService: ProductService
  ) => {
    expect(productService).toBeTruthy();
  }));

  it('should get products', inject([HttpTestingController, ProductService], (
    httpMock: HttpTestingController,
    productService: ProductService
  ) => {
    const mockProduct = [{
      'productId': 1,
      'productName': 'Unlimited Fibre Broadband',
      'price': '24.50',
      'totalPrice': '24.50',
      'contractLength': '12',
      'productSeller': 'Talktalk'
    }];
    const mockReq = httpMock.expectOne('assets/stubs/getProductDetails.json');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockProduct);
    httpMock.verify();
  }
  )
  );
});
