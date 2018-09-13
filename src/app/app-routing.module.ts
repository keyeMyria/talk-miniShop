import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductDetailsService } from 'src/app/product-details/product-details.service';


const routes: Routes = [
  { path: 'products', component: ProductDetailsComponent },
  { path: 'basket/:id', component: BasketComponent},
  { path: 'confirm', component: ConfirmationComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    { enableTracing: false }
  ) ],
  exports: [ RouterModule ],
  providers: [ProductDetailsService]
})
export class AppRoutingModule { }
