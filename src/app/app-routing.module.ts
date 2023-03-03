import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthenticationGuard } from './authentication.guard';
const approutes: Routes = [
  { path: '', redirectTo: '/registration-form', pathMatch: 'full' },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'registration-list', component: RegistrationListComponent,canActivate: [AuthenticationGuard]},
  {path: 'login-form', component: LoginFormComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
