import { TraineeCrudComponent } from './trainee-crud/trainee-crud.component';
import { TraineeListComponent } from './trainee-list/trainee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMode } from 'src/app/shared/constant';

const routes: Routes = [
  {path: '',
  children: [
    { path: '', component: TraineeListComponent },
    {
      path: 'create',
     component: TraineeCrudComponent,
     data: {mode: FormMode.Create}
     },
    { path: 'update/:id/:wave',
     component: TraineeCrudComponent ,
     data: {mode: FormMode.Update}
    },
    { path: 'read/:id/:wave',
     component: TraineeCrudComponent ,
     data: {mode: FormMode.Read}
    }
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineeRoutingModule { }
