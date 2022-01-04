import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoinComponent } from './gastoin.component';

describe('GastoinComponent', () => {
  let component: GastoinComponent;
  let fixture: ComponentFixture<GastoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
