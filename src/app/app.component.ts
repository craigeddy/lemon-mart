import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary" fxLayoutGap="8px">
    <button mat-icon-button><mat-icon>menu</mat-icon></button>
    <a mat-button routerLink="/home"><mat-icon svgIcon="lemon"></mat-icon>
    <span class="mat-h2" style="margin-left: 5px">LemonMart</span></a>
    <span class="flex-spacer"></span>
    <button mat-mini-fab routerLink="/user/profile" matTooltip="Profile"
      aria-label="User Profile"><mat-icon>account_circle</mat-icon></button>
    <button mat-mini-fab routerLink="/user/logout" matTooltip="Logout"
      aria-label="Logout"><mat-icon>lock_open</mat-icon></button>
  </mat-toolbar>
  <router-outlet class="app-container"></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app'
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
    )
  }
}
