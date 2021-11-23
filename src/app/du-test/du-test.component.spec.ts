import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuTestComponent } from './du-test.component';

describe('DuTestComponent', () => {
  let component: DuTestComponent;
  let fixture: ComponentFixture<DuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
