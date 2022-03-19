import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'training-class',
    loadChildren: () =>
      import('./components/training-class/training-class.module').then((m) => m.TrainingClassModule),
      data:{
        role:['vendor','administrator']
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
