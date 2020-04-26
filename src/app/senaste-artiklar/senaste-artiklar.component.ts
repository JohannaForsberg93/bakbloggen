import { Component, OnInit } from '@angular/core';
import { ArtiklarService } from '../artiklar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senaste-artiklar',
  templateUrl: './senaste-artiklar.component.html',
  styleUrls: ['./senaste-artiklar.component.css']
})
export class SenasteArtiklarComponent implements OnInit {

  constructor(private artikelService: ArtiklarService, private router: Router) { }
  artiklar;
  ngOnInit(): void {
    this.artiklar = this.artikelService.getArtiklar();
  }
  getArtiklar(){
    return this.artikelService.getArtiklar();
    
  }
  readIt(i:number){
    this.router.navigate([''], {queryParams: {page: i}});
  }
}
