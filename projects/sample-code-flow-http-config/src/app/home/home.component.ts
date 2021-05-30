import { Component, OnInit } from '@angular/core';
import { OidcClientNotification, OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  configuration: OpenIdConfiguration;
  userDataChanged$: Observable<OidcClientNotification<any>>;
  userData$: Observable<any>;
  isAuthenticated = false;
  checkSessionChanged$: Observable<boolean>;
  checkSessionChanged: any;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.configuration = this.oidcSecurityService.getConfiguration();
    this.userData$ = this.oidcSecurityService.userData$;

    this.oidcSecurityService.isAuthenticated$.subscribe((authenticated: boolean) => {
      this.isAuthenticated = authenticated;

      console.warn('authenticated: ', authenticated);
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  refreshSession() {
    this.oidcSecurityService.forceRefreshSession().subscribe((result) => console.log(result));
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  logoffLocal() {
    this.oidcSecurityService.logoffLocal();
  }
}
