import { TrainingClassListComponent } from './training-class-list/training-class-list.component';
import { TrainingClassCrudComponent } from './training-class-crud/training-class-crud.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMode } from 'src/app/shared/constant/form-mode';

const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: TrainingClassListComponent },
    {
      path: 'create',
     component: TrainingClassCrudComponent,
     data: {mode: FormMode.Create}
     },
    { path: 'update/:id/:wave',
     component: TrainingClassCrudComponent ,
     data: {mode: FormMode.Update}
    },
    { path: 'read/:id/:wave',
     component: TrainingClassCrudComponent ,
     data: {mode: FormMode.Read}
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingClassRoutingModule { }
