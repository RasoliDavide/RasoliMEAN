import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Unit } from '../unit.model';
@Component({
  selector: 'app-unit-visualizer',
  templateUrl: './unit-visualizer.component.html',
  styleUrls: ['./unit-visualizer.component.css']
})
export class UnitVisualizerComponent implements OnInit {

  @Input() selectedUnit : Unit;
  @Output() modifiedToForward = new EventEmitter<Unit>();
  @Output() deletedToForward = new EventEmitter<String>();

  visuaModifier : boolean = false;
  constructor() {}

  ngOnInit(): void {
  }
  forwardModifiedUnit(modified : Unit) : void
  {
    this.selectedUnit = modified;
    this.toggleModifier();
    this.modifiedToForward.emit(modified);
  }
  forwardDeletedUnit(toDelete : String) : void
  {
    this.toggleModifier();
    this.deletedToForward.emit(toDelete);
  }
  toggleModifier() : void
  {
    this.visuaModifier = !this.visuaModifier;
    console.log(this.visuaModifier)
  }
}
