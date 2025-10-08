import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    errorMessage: string | null = null;

    constructor(private router: Router, private toastr: ToastrService) {}

    onSubmit(form: NgForm) {
        const usernameOrEmail = (this.email || '').trim();
        const password = (this.password || '').trim();

        if (usernameOrEmail === 'admin' && password === 'admin123') {
            this.errorMessage = null;

            this.toastr.success('Login realizado com sucesso!', 'Sucesso', {
                timeOut: 3000,
                closeButton: true,
                positionClass: 'toast-top-center'
            });

            this.router.navigate(['/busca-site']);
            return;
        }

        this.errorMessage = 'Usuário e/ou senha estão errados';
        this.toastr.error(this.errorMessage, '', {
            timeOut: 3000,
            closeButton: true,
            positionClass: 'toast-top-right'
        }); 
    }

    goToCadastro() {
        this.router.navigate(['/cadastro-login']);
    }

    loginWithGoogle() {
        setTimeout(() => {
            this.router.navigate(['/busca-site']);
        }, 1500);

        this.toastr.success('Login com Google realizado com sucesso!', 'Sucesso', {
            timeOut: 3000,
            closeButton: true,
            positionClass: 'toast-top-center'
        });        
    }
}
