import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
  dataArray: any;


  constructor(private regService: RegistrationService) { }

  ngOnInit(): void {
    this.dataArray = this.regService.getData('formData');
    // const userString = localStorage.getItem('users') as string;
    // const users = JSON.parse(userString);
    // return users || [];
  }
}
