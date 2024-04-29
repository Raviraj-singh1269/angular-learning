import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }


  theme: boolean = true;  
  onClick = () => {
    console.log('clicked', this.theme);
    this.theme = !this.theme;
  }

  onSubmit(email: string, password: string) {
    console.log("click on submit");
    localStorage.setItem('enteredEmail', email);
    localStorage.setItem('enteredPassword', password);
    this.router.navigate(['/service/users']);
  }
}
