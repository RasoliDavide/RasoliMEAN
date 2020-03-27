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
  ngOnInit()
  {
    this.observerAll = this.http.get<Unit[]>('http://localhost:3000/api/all');
    this.observerAll.subscribe((data) => {this.unitList = data});
  }
  selectUnit(clicked : String)
  {
    let url = 'http://localhost:3000/api/search?unit=' + clicked;
    this.observerSin = this.http.get<Unit>(url);
    this.observerSin.subscribe((data) => {this.selectedUnit = data[0]; });
  }
  toggleAddForm() : void
  {
    this.visuaAddForm = !this.visuaAddForm;
  }
}
