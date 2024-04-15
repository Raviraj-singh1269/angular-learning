import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent {
  loginForm!: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

       //set method
       this.loginForm.setValue({
       email: 'someone@example.com',
       password: 'xyz'
    });
       
  }

  addMoreField(){
    this.loginForm.addControl('custom_field', new FormControl('custom_field_value'));
    console.log(this.loginForm)
  }
  removeAddedField(){
    this.loginForm.removeControl('custom_field');
    console.log(this.loginForm)
  }
  onSubmit() {
    // Handle form submission here
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      // Additional logic to authenticate user or 
      // perform other actions get, set, patch,reset, add, remove, contains


      //get method
      console.log(this.loginForm.get('email'));

      //patch method
      console.log(this.loginForm.patchValue({
        email: 'anyone@example.com',
        password: '123'
      }));

      //reset method
      // console.log(this.loginForm.reset())


    }
  }
}
