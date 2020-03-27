import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from '../unit.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addUnitForm : FormGroup;
  http : HttpClient;
  observerPos : Observable<Object>; 
  constructor(fb : FormBuilder, http : HttpClient) { 
    this.addUnitForm = fb.group(
      {
        'Unit' : ['', Validators.required],
        'Cost' : ['', Validators.required],
        'Hit_Speed' : ['', Validators.required],
        'Speed' : ['', Validators.required],
        'Deploy_Time' : ['', Validators.required],
        'Range' : ['', Validators.required],
        'Target' : ['', Validators.required],
        'Count' : ['', Validators.required],
        'Transport' : ['', Validators.required],
        'Type' : ['', Validators.required],
        'Rarity' : ['', Validators.required]
      }
    )
    this.http = http;
  }

  ngOnInit(): void {
  }
  postAdd() : void
  {
    if(this.addUnitForm.valid)
    {
      let newUnit = new Unit();
      newUnit.Unit = this.addUnitForm.controls['Unit'].value;
      newUnit.Cost = this.addUnitForm.controls['Cost'].value;
      newUnit.Hit_Speed = this.addUnitForm.controls['Hit_Speed'].value;
      newUnit.Speed = this.addUnitForm.controls['Speed'].value;
      newUnit.Deploy_Time = this.addUnitForm.controls['Range'].value;
      newUnit.Range = this.addUnitForm.controls['Hit_Speed'].value;
      newUnit.Target = this.addUnitForm.controls['Target'].value;
      newUnit.Count = this.addUnitForm.controls['Count'].value;
      newUnit.Transport = this.addUnitForm.controls['Transport'].value;
      newUnit.Type = this.addUnitForm.controls['Type'].value;
      newUnit.Rarity = this.addUnitForm.controls['Rarity'].value;
      let httpHeader = new HttpHeaders({'Content-Type': 'application/json'})
      this.observerPos = this.http.post('http://localhost:3000/api/add', JSON.stringify(newUnit), {headers : httpHeader});
      this.observerPos.subscribe((data) => {console.log(data)});
    }
  }
}
