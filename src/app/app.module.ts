import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql/graphql.module';
import { BasketComponent } from './basket/basket.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CartStore } from './store/cart.store';
import { UserStore } from './store/user.store';
import { ProductStore } from './store/product.store';
import { OrderStore } from './store/order.store';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    BasketComponent,
    ConfirmationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    MobxAngularModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CartStore, ProductStore, UserStore, OrderStore],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
