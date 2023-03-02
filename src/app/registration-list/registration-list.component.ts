import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
  dataArray: any;
  isLoggedIn: boolean = false;

  constructor(private regService: RegistrationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.dataArray = this.regService.getData('formData');
    // this.isLoggedIn = this.authService.login();
  }

  onSaveData(data: { id:any,time: any; }) {
    let StoredData = JSON.parse(localStorage.getItem('formData') as string);

    for (let i = 0; i < StoredData.length; i++) {
      if (StoredData[i].id === data.id) {
        StoredData[i].time = data.time;
        break;
      }
    }

    localStorage.setItem('formData', JSON.stringify(StoredData));
  }
}


