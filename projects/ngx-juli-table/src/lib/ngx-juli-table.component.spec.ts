import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJuliTableComponent } from './ngx-juli-table.component';

describe('NgxJuliTableComponent', () => {
  let component: NgxJuliTableComponent;
  let fixture: ComponentFixture<NgxJuliTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxJuliTableComponent]
    });
    fixture = TestBed.createComponent(NgxJuliTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
