import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationListComponent,
    RegistrationFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers:[RegistrationService]
})
export class AppModule { }
