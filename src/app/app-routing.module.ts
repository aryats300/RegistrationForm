import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
// import { ActivatedRoute } from '@angular/router';
const approutes: Routes = [
  { path: '', redirectTo: '/registration-form', pathMatch: 'full' },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'registration-list', component: RegistrationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule],
  // providers: [ActivatedRoute],
})
export class AppRoutingModule {}
