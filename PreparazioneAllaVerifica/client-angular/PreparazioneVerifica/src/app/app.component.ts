import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Prodotto} from '../prodotto'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PreparazioneVerifica';
  httpClient : HttpClient;
  prodotti : Prodotto[];
  constructor(http : HttpClient)
  {
    this.httpClient = http;
  }
  creaRichiesta()
  {
    let o = this.httpClient.get<Prodotto[]>('http://localhost:3000/api/products');
    o.subscribe(this.riceviDati);
  }
  riceviDati = (d : Prodotto[]) =>
  {
    this.prodotti = d;
  }
}
