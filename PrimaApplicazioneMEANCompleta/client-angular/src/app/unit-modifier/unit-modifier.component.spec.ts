import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitModifierComponent } from './unit-modifier.component';

describe('UnitModifierComponent', () => {
  let component: UnitModifierComponent;
  let fixture: ComponentFixture<UnitModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
