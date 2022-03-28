import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NgModule } from '@angular/core';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './components/profile/profile.component';
import { TrainerCrudComponent } from './components/trainer/trainer-crud/trainer-crud.component';
import { TrainerListComponent } from './components/trainer/trainer-list/trainer-list.component';
import { AttendanceComponent } from './components/attendance/attendance/attendance.component';
import { AttendanceCrudComponent } from './components/attendance/attendance-crud/attendance-crud.component';

@NgModule({
  declarations: [
    PrivateComponent,
    MainpageComponent,
    ProfileComponent,
    TrainerCrudComponent,
    TrainerListComponent,
    AttendanceComponent,
    AttendanceCrudComponent,
  ],
  imports: [PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
