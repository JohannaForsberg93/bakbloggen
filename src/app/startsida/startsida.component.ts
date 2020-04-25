import { Component, OnInit } from '@angular/core';
import { ArtiklarService } from '../artiklar.service';
@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {

  constructor(private artikelService: ArtiklarService) { }
  artiklar;
  artikel;
  ngOnInit(): void {
    this.artiklar = this.artikelService.getArtiklar();
    this.artikel = this.artiklar[0];
  }
  getArtiklar(){
    return this.artikelService.getArtiklar();
    
  }
}
