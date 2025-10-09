import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/busca-site',    title: 'Busque seu site',   icon:'',              class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon:'',              class: '' },
    { path: '/sobre-nos',     title: 'Sobre Nós',         icon:'',              class: '' },
    { path: '/perfil',        title: 'Meu Perfil',        icon:'',              class: '' },

    // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    
    constructor(private router: Router) {}
    
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        sessionStorage.clear();
        
        this.router.navigate(['/login']);
    }
}
