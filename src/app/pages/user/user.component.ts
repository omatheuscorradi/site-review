import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit{
    showDeleteModal = false;
    confirmText = '';
    showError = false;

    constructor(private router: Router) {}

    ngOnInit(){
    }

    openDeleteModal() {
        this.showDeleteModal = true;
        this.confirmText = '';
        this.showError = false;
    }

    closeDeleteModal() {
        this.showDeleteModal = false;
        this.confirmText = '';
        this.showError = false;
    }

    confirmDelete() {
        if (this.confirmText.toLowerCase() === 'excluir') {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            sessionStorage.clear();
            
            this.closeDeleteModal();
            this.router.navigate(['/login']);
        } else {
            this.showError = true;
        }
    }
}
