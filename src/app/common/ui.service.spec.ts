import { TestBed, inject } from '@angular/core/testing'

import { UiService } from './ui.service'
import { MaterialModule } from '../material.module'

describe('UiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [UiService],
    })
  })

  it('should be created', inject([UiService], (service: UiService) => {
    expect(service).toBeTruthy()
  }))
})
