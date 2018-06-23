import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InventoryHomeComponent } from './inventory-home.component'
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from '../../material.module'

describe('InventoryHomeComponent', () => {
  let component: InventoryHomeComponent
  let fixture: ComponentFixture<InventoryHomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule],
      declarations: [InventoryHomeComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryHomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
