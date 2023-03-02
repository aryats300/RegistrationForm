import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
   
    console.log(form.value);
    const user = this.authService.authUser(form.value);
    if (user) {
      console.log('Login Successful');
      this.router.navigate(['/registration-list']);
    } else {
      console.log('Login not successsful');
      alert('Incorrect admin or password');
    }
  }
}