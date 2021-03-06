import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InventoryComponent } from './inventory.component'
import { MaterialModule } from '../material.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'

describe('InventoryComponent', () => {
  let component: InventoryComponent
  let fixture: ComponentFixture<InventoryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, HttpClientModule],
      declarations: [InventoryComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
