import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'cadastro-login',
    moduleId: module.id,
    templateUrl: 'cadastro-login.component.html',
    styleUrls: ['cadastro-login.component.css']
})

export class CadastroLoginComponent{

    nome: string = '';
    email: string = '';
    senha: string = '';
    confirmSenha: string = '';

    constructor(private router: Router, private toastr: ToastrService) {}

    cadastrar() {
        // Validação básica
        if (!this.nome || !this.email || !this.senha || !this.confirmSenha) {
            this.toastr.error('Por favor, preencha todos os campos', 'Erro', {
                timeOut: 3000,
                closeButton: true,
                positionClass: 'toast-top-right'
            });
            return;
        }

        if (this.senha !== this.confirmSenha) {
            this.toastr.error('As senhas não coincidem', 'Erro', {
                timeOut: 3000,
                closeButton: true,
                positionClass: 'toast-top-right'
            });
            return;
        }

        // Simular cadastro bem-sucedido
        this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso', {
            timeOut: 3000,
            closeButton: true,
            positionClass: 'toast-top-center'
        });

        // Navegar para a tela de login após um breve delay
        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 1500);
    }
}
