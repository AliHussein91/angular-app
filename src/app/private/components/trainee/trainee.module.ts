import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineeRoutingModule } from './trainee-routing.module';
import { TraineeCrudComponent } from './trainee-crud/trainee-crud.component';
import { TraineeListComponent } from './trainee-list/trainee-list.component';


@NgModule({
  declarations: [
    TraineeCrudComponent,
    TraineeListComponent
  ],
  imports: [
    CommonModule,
    TraineeRoutingModule
  ]
})
export class TraineeModule { }
