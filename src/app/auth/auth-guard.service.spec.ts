import { TestBed, inject } from '@angular/core/testing'

import { AuthGuard } from './auth-guard.service'
import { commonTestingModules, commonTestingProviders } from '../common/common.testing'

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat(AuthGuard),
    })
  })

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy()
  }))
})
