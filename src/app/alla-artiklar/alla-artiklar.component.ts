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
    console.log("title2: " + this.artiklar[0].title);
    console.log("content2: " + this.artiklar[0].content);
    
  }
  getArtiklar(){
    return this.artikelService.getArtiklar();
    
  }
}
