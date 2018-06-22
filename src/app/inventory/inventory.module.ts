import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material.module'

import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component'

@NgModule({
  imports: [CommonModule, InventoryRoutingModule],
  declarations: [InventoryComponent],
})
export class InventoryModule {}
