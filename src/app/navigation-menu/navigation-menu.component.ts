import { Component, OnInit } from '@angular/core'
import { AuthService, IAuthStatus } from '../auth/auth.service'
import { Role } from '../auth/role.enum'

@Component({
  selector: 'app-navigation-menu',
  styles: [
    `
      .active-link {
        font-weight: bold;
        border-left: 3px solid green;
      }
    `,
  ],
  template: `
    <mat-nav-list>
      <h3 matSubheader *ngIf="isManager">Manager</h3>
      <a mat-list-item *ngIf="isManager" routerLinkActive="active-link" routerLink="/manager/users">Users</a>
      <a mat-list-item *ngIf="isManager" routerLinkActive="active-link" routerLink="/manager/receipts">Receipts</a>
      <h3 matSubheader>Inventory</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/stockEntry">Stock Entry</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/products">Products</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/categories">Categories</a>
      <h3 matSubheader>Clerk</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/pos">POS</a>
    </mat-nav-list>
  `,
})
export class NavigationMenuComponent implements OnInit {
  _role: Role

  constructor(private authService: AuthService) {
    this._role = Role.None
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(authStatus => {
      setTimeout(() => {
        this._role = authStatus.userRole
      }, 0)
    })
  }

  get isManager(): boolean {
    return this._role === Role.Manager
  }
}
