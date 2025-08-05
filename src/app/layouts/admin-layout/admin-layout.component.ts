import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  showSidebar = false;
  private routesWithSidebar = [
    '/busca-site',
    '/dashboard',
    '/sobre-nos',
    '/perfil'
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showSidebar = this.routesWithSidebar
          .some(r => e.urlAfterRedirects.startsWith(r));
      });
  }
}
