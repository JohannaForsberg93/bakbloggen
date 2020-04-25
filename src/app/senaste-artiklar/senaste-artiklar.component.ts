import { Component, OnInit } from '@angular/core';
import { ArtiklarService } from '../artiklar.service';

@Component({
  selector: 'app-senaste-artiklar',
  templateUrl: './senaste-artiklar.component.html',
  styleUrls: ['./senaste-artiklar.component.css']
})
export class SenasteArtiklarComponent implements OnInit {

  constructor(private artikelService: ArtiklarService) { }
  artiklar;
  ngOnInit(): void {
    this.artiklar = this.artikelService.getArtiklar();
  }
  getArtiklar(){
    return this.artikelService.getArtiklar();
    
  }
}
