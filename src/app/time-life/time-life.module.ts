import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeLifeRoutingModule } from './time-life-routing.module';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TimeLifeRoutingModule,
    ReactiveFormsModule
  ]
})
export class TimeLifeModule { }
