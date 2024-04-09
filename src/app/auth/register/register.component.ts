import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  theme: boolean = true;  
  onClick = () => {
    console.log('clicked', this.theme);
    this.theme = !this.theme;
  }
}
