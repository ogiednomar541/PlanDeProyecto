import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TucuentaComponent } from './tucuenta.component';

describe('TucuentaComponent', () => {
  let component: TucuentaComponent;
  let fixture: ComponentFixture<TucuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TucuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TucuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
