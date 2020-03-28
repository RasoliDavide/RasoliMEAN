import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Unit } from '../unit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-unit-modifier',
  templateUrl: './unit-modifier.component.html',
  styleUrls: ['./unit-modifier.component.css']
})
export class UnitModifierComponent implements OnInit {
  @Input() selectedUnit : Unit;
  @Output() modifiedUnit = new EventEmitter<Unit>();
  @Output() deletedUnit = new EventEmitter<String>();

  observerPut : Observable<Object>;
  observerDelete : Observable<Object>;
  http : HttpClient;
  modifyUnitForm : FormGroup;
  constructor(http : HttpClient, public fb : FormBuilder) {
    this.http = http;
  }

  ngOnInit(): void {
    console.log(this.selectedUnit)
    this.modifyUnitForm = this.fb.group(
      {
        'Unit' : [this.selectedUnit.Unit, Validators.required],
        'Cost' : [this.selectedUnit.Cost, Validators.required],
        'Hit_Speed' : [this.selectedUnit.Hit_Speed , Validators.required],
        'Speed' : [this.selectedUnit.Speed, Validators.required],
        'Deploy_Time' : [this.selectedUnit.Deploy_Time, Validators.required],
        'Range' : [this.selectedUnit.Range, Validators.required],
        'Target' : [this.selectedUnit.Target, Validators.required],
        'Count' : [this.selectedUnit.Count, Validators.required],
        'Transport' : [this.selectedUnit.Transport, Validators.required],
        'Type' : [this.selectedUnit.Type, Validators.required],
        'Rarity' : [this.selectedUnit.Rarity, Validators.required]
      }
    )
    this.modifyUnitForm.controls['Unit'].disable();
  }
  putModify() : void
  {
    if(this.modifyUnitForm.valid)
    {
      let updatedUnit = new Unit();
      updatedUnit.Unit = this.selectedUnit.Unit;
      updatedUnit.Cost = this.modifyUnitForm.controls['Cost'].value;
      updatedUnit.Hit_Speed = this.modifyUnitForm.controls['Hit_Speed'].value;
      updatedUnit.Speed = this.modifyUnitForm.controls['Speed'].value;
      updatedUnit.Deploy_Time = this.modifyUnitForm.controls['Range'].value;
      updatedUnit.Range = this.modifyUnitForm.controls['Hit_Speed'].value;
      updatedUnit.Target = this.modifyUnitForm.controls['Target'].value;
      updatedUnit.Count = this.modifyUnitForm.controls['Count'].value;
      updatedUnit.Transport = this.modifyUnitForm.controls['Transport'].value;
      updatedUnit.Type = this.modifyUnitForm.controls['Type'].value;
      updatedUnit.Rarity = this.modifyUnitForm.controls['Rarity'].value;
      let httpHeader = new HttpHeaders({'Content-Type': 'application/json'})
      this.observerPut = this.http.put('http://localhost:3000/api/modify', JSON.stringify(updatedUnit), {headers : httpHeader});
      this.modifiedUnit.emit(updatedUnit);
      this.observerPut.subscribe((data) => {console.log(data)});
    }
  }
  deleteUnit() : void
  {
    this.observerDelete = this.http.delete(`http://localhost:3000/api/delete/${this.selectedUnit.Unit}`);
    this.deletedUnit.emit(this.selectedUnit.Unit);
    this.observerDelete.subscribe((data) => {console.log(data)});
  }
}
