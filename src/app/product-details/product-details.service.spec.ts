import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductDetailsService]
    });
  }));

  it('should be created', inject([HttpTestingController, ProductDetailsService], (
    httpMock: HttpTestingController,
    productDetailsService: ProductDetailsService
  )  => {
    expect(productDetailsService).toBeTruthy();
  }));

  it('should get products', inject([HttpTestingController, ProductDetailsService], (
        httpMock: HttpTestingController,
        productDetailsService: ProductDetailsService
      ) => {
        const mockProduct = [{
          'productId': 1,
          'productName': 'Unlimited Fibre Broadband',
          'price': '24.50',
          'totalPrice': '24.50',
          'contractLength': '12',
          'productSeller': 'Talktalk'
        }];
        productDetailsService.getProductDetails().subscribe((data) => {
          expect(data).toEqual(mockProduct);
        });
        const mockReq = httpMock.expectOne('assets/stubs/getProductDetails.json');
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockProduct);
        httpMock.verify();
      }
    )
  );
});
