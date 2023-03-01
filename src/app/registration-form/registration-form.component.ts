import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  alert:boolean=false

  regForm:FormGroup;

constructor(){
  

}
ngOnInit(){
  this.regForm=new FormGroup({
    'id':new FormControl(0),
    'firstname':new FormControl(null,Validators.required),
    'lastname':new FormControl(null,Validators.required),
    'gender':new FormControl(null,Validators.required),
    'age':new FormControl(null,Validators.required),
    'challenge':new FormControl(null,Validators.required),
    'phonenumber': new FormControl(null, [
      Validators.required,
     
      Validators.pattern(/^\d{10}$/)
    ]),
    
  });
 
}



onSubmit() {
  if (this.regForm.valid) {
    let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    let lastId = formDataArray.length > 0 ? formDataArray[formDataArray.length - 1].id : 0;
    let newId = lastId + 1;

    let formValueWithId = { ...this.regForm.value, id: newId };

    formDataArray.push(formValueWithId);
    localStorage.setItem('formData', JSON.stringify(formDataArray));

    this.alert = true;
    this.regForm.reset();
  } else {
    alert('Please fill all fields.');
  }
}

closeAlert() {
  this.alert = false;
}
}







