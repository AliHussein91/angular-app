import { TrainerCrudComponent } from './trainer-crud/trainer-crud.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMode } from 'src/app/shared/constant';

const routes: Routes = [
  {
    path: '',
    component: TrainerListComponent,
    children: [
      // {
      //   path: '', 
      // },
      {
        path: 'create',
        component: TrainerCrudComponent,
        data: { mode: FormMode.Create },
      },
      {
        path: 'update/:id/:wave',
        component: TrainerCrudComponent,
        data: { mode: FormMode.Update },
      },
      {
        path: 'delete/:id/:wave',
        component: TrainerCrudComponent,
        data: { mode: FormMode.Delete },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerRoutingModule {}
