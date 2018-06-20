import { NgModule } from '@angular/core'
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material'

@NgModule({
  imports: [MatToolbarModule, MatIconModule],
  exports: [MatToolbarModule, MatIconModule],
  declarations: [],
})
export class MaterialModule {}
