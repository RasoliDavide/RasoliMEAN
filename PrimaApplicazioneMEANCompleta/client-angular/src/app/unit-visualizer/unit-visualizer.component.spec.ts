import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitVisualizerComponent } from './unit-visualizer.component';

describe('UnitVisualizerComponent', () => {
  let component: UnitVisualizerComponent;
  let fixture: ComponentFixture<UnitVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
