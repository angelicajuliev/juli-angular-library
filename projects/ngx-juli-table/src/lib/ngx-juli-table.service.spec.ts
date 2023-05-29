import { TestBed } from '@angular/core/testing';

import { NgxJuliTableService } from './ngx-juli-table.service';

describe('NgxJuliTableService', () => {
  let service: NgxJuliTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJuliTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
