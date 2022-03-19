import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomepageComponent,
    LoginComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
  exports: [HomepageComponent, LoginComponent, ResetPasswordComponent],
})
export class PublicModule {}
