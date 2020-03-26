import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../unit.model';
@Component({
  selector: 'app-unit-visualizer',
  templateUrl: './unit-visualizer.component.html',
  styleUrls: ['./unit-visualizer.component.css']
})
export class UnitVisualizerComponent implements OnInit {

  @Input() selectedUnit : Unit;
  constructor() {}

  ngOnInit(): void {
  }

}
