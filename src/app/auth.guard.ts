import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const enteredEmail = localStorage.getItem('enteredEmail');
    const enteredPassword = localStorage.getItem('enteredPassword');

    if (storedEmail && storedPassword && enteredEmail && enteredPassword) {
      return storedEmail === enteredEmail && storedPassword === enteredPassword;
    } else {
      return false;
    }
};

