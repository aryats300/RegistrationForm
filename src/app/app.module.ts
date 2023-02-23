import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { RegistrationLinkComponent } from './registration-link/registration-link.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationLinkComponent,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
