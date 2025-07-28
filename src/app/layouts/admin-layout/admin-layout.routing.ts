import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { SobreNosComponent } from '../../pages/sobre-nos/sobre-nos.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { BuscaSiteComponent } from 'app/pages/busca-site/busca-site.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'busca-site',     component: BuscaSiteComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'sobre-nos',      component: SobreNosComponent },
    { path: 'perfil',           component: UserComponent },

    // { path: 'table',          component: TableComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
];
