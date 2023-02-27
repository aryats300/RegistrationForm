import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  alert:boolean=false
  firstName:string;
  lastName:string;
  gender:string;
  age:number;
  phoneNumber:number;

  regForm:FormGroup;

constructor(){
  

}
ngOnInit(){
  this.regForm=new FormGroup({
    'firstname':new FormControl(null,Validators.required),
    'lastname':new FormControl(null,Validators.required),
    'gender':new FormControl(null,Validators.required),
    'age':new FormControl(null,Validators.required),
    'phonenumber': new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    
  });
 
}



onSubmit(){
 console.log(this.regForm);

this.alert=true
// localStorage.setItem('formData', JSON.stringify(this.regForm.value));
// this.regForm.reset();

let formDataArray = JSON.parse(localStorage.getItem('formData'));


  if (!Array.isArray(formDataArray)) {
    formDataArray = [];
  }

  
  formDataArray.push(this.regForm.value);


  localStorage.setItem('formData', JSON.stringify(formDataArray));

  
  this.regForm.reset();
}
closeAlert(){
  this.alert=false
}
}



