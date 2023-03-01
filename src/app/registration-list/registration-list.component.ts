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
   
  }
  
/** Add time to the Registration List Table for each data */
onSaveData(data: { id:any,time: any; }) {
  console.log('submit');
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
