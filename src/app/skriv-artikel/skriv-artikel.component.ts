import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ArtikelModell } from '../artikel-modell';

@Component({
  selector: 'app-skriv-artikel',
  templateUrl: './skriv-artikel.component.html',
  styleUrls: ['./skriv-artikel.component.css']
})
export class SkrivArtikelComponent implements OnInit {

  constructor() { }

  artikel: ArtikelModell;

  ngOnInit(): void {
    this.artikel = new ArtikelModell;
    

}

}
