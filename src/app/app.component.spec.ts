import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { MaterialModule } from './material.module'
import { HttpClientModule } from '@angular/common/http'
import { by } from 'protractor'
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, HttpClientModule],
      declarations: [AppComponent],
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('app')
  }))
})
