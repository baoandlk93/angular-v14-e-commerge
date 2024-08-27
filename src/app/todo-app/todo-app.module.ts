import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoAppModule { }
