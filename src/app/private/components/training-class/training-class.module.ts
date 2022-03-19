import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingClassRoutingModule } from './training-class-routing.module';
import { TrainingClassCrudComponent } from './training-class-crud/training-class-crud.component';
import { TrainingClassListComponent } from './training-class-list/training-class-list.component';


@NgModule({
  declarations: [
    TrainingClassCrudComponent,
    TrainingClassListComponent
  ],
  imports: [
    CommonModule,
    TrainingClassRoutingModule
  ],
  exports: [
    TrainingClassCrudComponent,
    TrainingClassListComponent
  ]
})
export class TrainingClassModule { }
