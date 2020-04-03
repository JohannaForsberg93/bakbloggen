import { Component, OnInit } from '@angular/core';
import { Artiklar } from '../artiklar';
import { ArtiklarService } from '../artiklar.service';

@Component({
  selector: 'app-ny-artikel',
  templateUrl: './ny-artikel.component.html',
  styleUrls: ['./ny-artikel.component.css']
})
export class NyArtikelComponent implements OnInit {
  model: Artiklar;
  constructor(private artikelService: ArtiklarService) { }

  ngOnInit(): void {
     this.model = new Artiklar('', '', '', '');
  }
  
  spara(){
    this.artikelService.sparaArtikel(this.model);
  }
  get diagnostic() { return JSON.stringify(this.model); }
}
