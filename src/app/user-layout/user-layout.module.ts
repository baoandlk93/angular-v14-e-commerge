import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { HomeComponent } from './home-page/home.component';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import { ProductComponent } from './components/product/product.component';
import { ProductQuickViewComponent } from './components/product-quick-view/product-quick-view.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductQuickViewComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    NgOptimizedImage
  ]
})
export class UserLayoutModule { }
