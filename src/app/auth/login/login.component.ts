import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  theme: boolean = true;  
  onClick = () => {
    console.log('clicked', this.theme);
    this.theme = !this.theme;
  }
}
