import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        }
    }
}
