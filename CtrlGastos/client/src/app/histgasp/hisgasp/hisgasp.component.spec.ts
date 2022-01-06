import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisgaspComponent } from './hisgasp.component';

describe('HisgaspComponent', () => {
  let component: HisgaspComponent;
  let fixture: ComponentFixture<HisgaspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisgaspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HisgaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
