import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainpageComponent,
      },
      {
        path: 'trainer',
        loadChildren: () =>
          import('./components/trainer/trainer.module').then(
            (m) => m.TrainerModule
          ),
        data: {
          role: ['vendor', 'administrator'],
        },
      },
      {
        path: 'trainee',
        loadChildren: () =>
          import('./components/trainee/trainee.module').then(
            (m) => m.TraineeModule
          ),
        data: {
          role: ['vendor', 'administrator'],
        },
      },
      {
        path: 'training-class',
        loadChildren: () =>
          import('./components/training-class/training-class.module').then(
            (m) => m.TrainingClassModule
          ),
        data: {
          role: ['vendor', 'administrator'],
        },
      },
      {
        path: 'attendance',
        loadChildren: () =>
          import('./components/attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
        data: {
          role: ['vendor', 'administrator'],
        },
      },
    ],
  },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
