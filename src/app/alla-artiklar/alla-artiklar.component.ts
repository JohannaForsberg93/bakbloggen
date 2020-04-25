import { Component, OnInit } from '@angular/core';
import { ArtiklarService } from '../artiklar.service';
import { Artiklar } from '../artiklar';

@Component({
  selector: 'app-alla-artiklar',
  templateUrl: './alla-artiklar.component.html',
  styleUrls: ['./alla-artiklar.component.css']
})
export class AllaArtiklarComponent implements OnInit {

  constructor(private artikelService: ArtiklarService) { }
  artiklar;
  ngOnInit(): void {
    this.artiklar = this.artikelService.getArtiklar();
  }
  getArtiklar(){
    return this.artikelService.getArtiklar();
    
  }
  deleteArtiklar(){
    this.artikelService.deleteArtiklar();
    return this.artikelService.getArtiklar();
  }
}
