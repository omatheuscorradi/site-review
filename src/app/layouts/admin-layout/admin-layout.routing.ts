import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { SobreNosComponent } from '../../pages/sobre-nos/sobre-nos.component';
import { BuscaSiteComponent } from '../../pages/busca-site/busca-site.component';
import { LoginComponent } from '../../pages/login/login.component';
import { PrincipalComponent } from '../../pages/principal/principal.component';
import { CadastroLoginComponent } from '../../pages/cadastro-login/cadastro-login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'busca-site',     component: BuscaSiteComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'sobre-nos',      component: SobreNosComponent },
    { path: 'perfil',         component: UserComponent },
    { path: 'login',          component: LoginComponent},
    { path: 'principal',      component: PrincipalComponent},
    { path: 'cadastro-login', component: CadastroLoginComponent},
    // { path: 'table',          component: TableComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
];
