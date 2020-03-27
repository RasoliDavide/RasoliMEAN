import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UnitVisualizerComponent } from './unit-visualizer/unit-visualizer.component';
import { AddComponent } from './add/add.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { UnitModifierComponent } from './unit-modifier/unit-modifier.component';
@NgModule({
  declarations: [
    AppComponent,
    UnitVisualizerComponent,
    AddComponent,
    UnitModifierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
