import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { BasketComponent } from 'src/app/basket/basket.component';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductDetailsComponent,
        BasketComponent,
        ConfirmationComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [AppRoutingModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
