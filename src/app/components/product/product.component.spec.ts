import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from './product.component';
import { ProductService } from 'src/app/components/product/product.service';
import { HttpClientModule } from '@angular/common/http';
describe('ProductDetailsComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ProductComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([ProductService], (productService: ProductService) => {
    expect(component).toBeTruthy();
  }));

  it('should be created', async(inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  })));
});
