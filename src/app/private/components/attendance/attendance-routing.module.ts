import { AttendanceComponent } from './attendance/attendance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceCrudComponent } from './attendance-crud/attendance-crud.component';
import { FormMode } from 'src/app/shared/constant';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AttendanceComponent },
      {
        path: 'create',
        component: AttendanceCrudComponent,
        data: { mode: FormMode.Create },
      },
      {
        path: 'update/:id/:wave',
        component: AttendanceCrudComponent,
        data: { mode: FormMode.Update },
      },
      {
        path: 'read/:id/:wave',
        component: AttendanceCrudComponent,
        data: { mode: FormMode.Read },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
