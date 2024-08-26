import { Component, DoCheck } from '@angular/core';
import { LoginConnectionService } from '../services/login-connection.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  selectedCar?: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  clicked(e: Event) {
    console.log((e.target as HTMLInputElement).value);
  }
  submited = false;
  priceSubmited = false;
  constructor(private s$:LoginConnectionService){
    this.formPrice?.['yearlyPrice']?.valueChanges.subscribe({
      next:(data)=>{
        console.log("inside");
        this.formPrice?.['monthlyPrice'].clearValidators();
        this.formPrice?.['monthlyPrice'].setValidators([
          Validators.required,
          Validators.max(this.formPrice?.['yearlyPrice'].value)
        ])
        this.formPrice?.['monthlyPrice'].updateValueAndValidity();
      }
    })
  }

  inputForm:FormGroup = new FormGroup({
    price : new FormControl()
  })

  price:FormGroup = new FormGroup({
    monthlyPrice : new FormControl("",[Validators.required]),
    yearlyPrice : new FormControl("",[Validators.required]),
  })
  checkValid(){
    console.log(this.formPrice);
    this.formPrice['monthlyPrice'].valueChanges
    this.formPrice['monthlyPrice'].removeValidators(Validators.max(0))
    this.formPrice['monthlyPrice'].addValidators(Validators.max(this.formPrice['yearlyPrice'].value))
    this.formPrice['monthlyPrice'].updateValueAndValidity()
    console.log(this.formPrice);
    this.priceSubmited = true;
  }


  // monthValidate(control: FormGroup): ValidationErrors | null {
  //   if (control.value && control.value > 30) {
  //     return { monthExceeded: true };
  //   }
  //   return null;
  // }


  get formPrice(){
    return this.price.controls;
  }

  get form(){
    return this.inputForm.controls;
  }


}
