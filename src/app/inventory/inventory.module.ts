import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material.module'

import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component'
import { InventoryHomeComponent } from './inventory-home/inventory-home.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'

@NgModule({
  imports: [CommonModule, InventoryRoutingModule],
  declarations: [InventoryComponent, InventoryHomeComponent, StockEntryComponent],
})
export class InventoryModule {}
