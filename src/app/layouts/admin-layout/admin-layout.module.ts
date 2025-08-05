import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { SobreNosComponent }        from '../../pages/sobre-nos/sobre-nos.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { LoginComponent }           from '../../pages/login/login.component';
import { PrincipalComponent }       from '../../pages/principal/principal.component';
import { CadastroLoginComponent }   from '../../pages/cadastro-login/cadastro-login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuscaSiteComponent } from 'app/pages/busca-site/busca-site.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    SobreNosComponent,
    IconsComponent,
    NotificationsComponent,
    BuscaSiteComponent,
    LoginComponent,
    PrincipalComponent,
    CadastroLoginComponent
  ]
})

export class AdminLayoutModule {}
