import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualertComponent } from './dualert.component';

describe('DualertComponent', () => {
  let component: DualertComponent;
  let fixture: ComponentFixture<DualertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
