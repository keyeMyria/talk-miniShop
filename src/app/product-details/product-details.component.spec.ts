import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailsComponent } from './product-details.component';
import { StoreModule, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProductDetailsService } from 'src/app/product-details/product-details.service';
import { productDetailsReducer } from 'src/app/reducers/product-details.reducer';
import { HttpClientModule } from '@angular/common/http';
describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule, StoreModule.forRoot({product: productDetailsReducer}) ],
      declarations: [ ProductDetailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ProductDetailsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([ProductDetailsService], (productDetailsService: ProductDetailsService) => {
    expect(component).toBeTruthy();
  }));

  it('should be created', async(inject([ProductDetailsService], (service: ProductDetailsService) => {
    expect(service).toBeTruthy();
  })));
});
