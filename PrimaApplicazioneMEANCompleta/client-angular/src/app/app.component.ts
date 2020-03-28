import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from './unit.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-angular';
  http : HttpClient;
  observerAll : Observable<Unit[]>;
  observerSin : Observable<Unit>;
  unitList : Unit[] = new Array<Unit>();
  selectedUnit : Unit;
  visuaAddForm : boolean = false;
  constructor(http : HttpClient)
  {
    this.http = http;
  }
  ngOnInit():void
  {
    this.observerAll = this.http.get<Unit[]>('http://localhost:3000/api/all');
    this.observerAll.subscribe((data) => {this.unitList = data});
  }
  selectUnit(clicked : String)
  {
    let url = `http://localhost:3000/api/search?unit=${clicked}`;
    this.observerSin = this.http.get<Unit>(url);
    this.observerSin.subscribe((data) => {this.selectedUnit = data[0]; });
  }
  toggleAddForm() : void
  {
    this.visuaAddForm = !this.visuaAddForm;
  }
  addToArray(added : Unit)
  {
    this.unitList.push(added)
  }
  modifyUnitInArray(unitToModify : Unit):void
  {
    let modificato = false;
    let i = 0;

    while(!modificato)
    {
      if(unitToModify.Unit == this.unitList[i].Unit)
      {
        this.unitList[i] = unitToModify;
        modificato = true;
      }
      else
      {
        i++;
      }
    }
  }
  deleteUnitInArray(unitToDelete : String):void
  {
    let eliminato = false;
    let i = 0;
    while(!eliminato)
    {
      if(unitToDelete == this.unitList[i].Unit)
      {
        this.unitList.splice(i, 1);
        this.selectedUnit = null;
        eliminato = true;
      }
      else
      {
        i++;
      }
    }
  }
}