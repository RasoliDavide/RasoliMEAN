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
  observerPos : Observable<String>; 
  unitList : Unit[] = new Array<Unit>();
  selectedUnit : Unit;

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
    console.log(clicked);
  }
}
