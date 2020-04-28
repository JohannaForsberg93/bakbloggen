import { Component, OnInit } from '@angular/core';
import { ArtiklarService } from '../artiklar.service';
import { AutentiseringService } from '../autentisering.service';
import { Router } from '@angular/router';
import { Artiklar } from '../artiklar';



@Component({
  selector: 'app-alla-artiklar',
  templateUrl: './alla-artiklar.component.html',
  styleUrls: ['./alla-artiklar.component.css']
})
export class AllaArtiklarComponent implements OnInit {
  model: Artiklar;
  constructor(private artikelService: ArtiklarService, private autentiseringService: AutentiseringService, private router: Router) { }
  artiklar;
  inloggad = false;
  visibleResetButton = false;
  artikelnummer: number;
  ngOnInit(): void {
    this.artiklar = this.artikelService.getArtiklar();
   
    this.autentiseringService.observableSource.subscribe(data => {
      this.inloggad = data;
    });
  }
  getArtiklar(){
    return this.artikelService.getArtiklar();
    
  }
  deleteArtikel(i){
    
    this.artikelService.deleteArtikel(i);
    
  }
  reset(){
    
    this.artikelService.deleteAll();
    location.reload();
    // this.artikelnummer= this.artikelService.getArtiklar().length;
   
  }
  readIt(i){
    this.router.navigate([''], {queryParams: {page: i}});
  }
}
