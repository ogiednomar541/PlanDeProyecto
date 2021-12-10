import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgastosComponent } from './addgastos.component';

describe('AddgastosComponent', () => {
  let component: AddgastosComponent;
  let fixture: ComponentFixture<AddgastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
