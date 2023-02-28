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
  // firstName:string;
  // lastName:string;
  // gender:string;
  // age:number;
  // phoneNumber:number;
  // time:string;
  // id:number
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
    'phonenumber': new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[1-9]+[0-9]*$/)
    ]),
    
  });
 
}

// onSubmit(){
//  console.log(this.regForm);

// this.alert=true
// // localStorage.setItem('formData', JSON.stringify(this.regForm.value));
// // this.regForm.reset();

// let formDataArray = JSON.parse(localStorage.getItem('formData'));

//   if (!Array.isArray(formDataArray)) {
//     formDataArray = [];
//   }

//   formDataArray.push(this.regForm.value);
//   localStorage.setItem('formData', JSON.stringify(formDataArray));
//   this.regForm.reset();
// }
// closeAlert(){
//   this.alert=false
// }
// }
onSubmit(){
  console.log(this.regForm);
  
  this.alert=true;

  let formDataArray = JSON.parse(localStorage.getItem('formData'));

  if (!Array.isArray(formDataArray)) {
    formDataArray = [];
  }

  let lastId = formDataArray.length > 0 ? formDataArray[formDataArray.length - 1].id : 0;
  let newId = lastId + 1;

  
  let formValueWithId = { ...this.regForm.value, id: newId };

  formDataArray.push(formValueWithId);
  localStorage.setItem('formData', JSON.stringify(formDataArray));
  // this.regService.setData('users', formDataArray);


 
  this.regForm.reset();
}
}


