import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql/graphql.module';
import { BasketComponent } from './components/basket/basket.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';
import { CartStore } from './store/cart.store';
import { UserStore } from './store/user.store';
import { ProductStore } from './store/product.store';
import { OrderStore } from './store/order.store';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BasketComponent,
    OrderComponent,
    UserComponent
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
