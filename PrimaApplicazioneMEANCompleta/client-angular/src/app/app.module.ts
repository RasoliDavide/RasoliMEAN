import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UnitVisualizerComponent } from './unit-visualizer/unit-visualizer.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitVisualizerComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
