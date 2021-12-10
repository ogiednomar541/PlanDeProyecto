import { TestBed } from '@angular/core/testing';

import { CtrlGastosServiceService } from './ctrl-gastos-service.service';

describe('CtrlGastosServiceService', () => {
  let service: CtrlGastosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtrlGastosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
