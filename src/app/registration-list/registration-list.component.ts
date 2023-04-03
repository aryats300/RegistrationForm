import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent {
  dataArray: any;

  constructor(
    private regService: RegistrationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.dataArray = this.regService.getData('formData');
  }
  onFileSelected(event: any, data: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
   
    reader.onloadend = () => {
      data.image = reader.result as string;
    };
    
    reader.readAsDataURL(file);
    console.log(file)
    console.log("reader",reader)
    
    if (data.image) {
      localStorage.setItem(`image_${data.id}`, data.image);
    }
  }
  
  
  onSaveData(data: { id: any; time: any; image: any }) {
    

    
    let storedData = JSON.parse(localStorage.getItem('formData') as string);

    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i].id === data.id) {
        storedData[i].time = data.time;
        storedData[i].image = data.image;

        break;
      }
    }

    localStorage.setItem('formData', JSON.stringify(storedData));
  }


}
