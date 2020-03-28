import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() added = new EventEmitter<Unit>();
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
      let newUnit = new Unit(
          this.addUnitForm.controls['Unit'].value,
          this.addUnitForm.controls['Cost'].value,
          this.addUnitForm.controls['Hit_Speed'].value,
          this.addUnitForm.controls['Speed'].value,
          this.addUnitForm.controls['Range'].value,
          this.addUnitForm.controls['Hit_Speed'].value,
          this.addUnitForm.controls['Target'].value,
          this.addUnitForm.controls['Count'].value,
          this.addUnitForm.controls['Transport'].value,
          this.addUnitForm.controls['Type'].value,
          this.addUnitForm.controls['Rarity'].value
      );
      let httpHeader = new HttpHeaders({'Content-Type': 'application/json'})
      this.observerPos = this.http.post('http://localhost:3000/api/add', JSON.stringify(newUnit), {headers : httpHeader});
      this.added.emit(newUnit);
      this.observerPos.subscribe((data) => {console.log(data)});
      this.addUnitForm.reset();
    }
  }
}
