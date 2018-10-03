import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'order', component: OrderComponent },
  { path: 'userDetails', component: UserComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false }
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
