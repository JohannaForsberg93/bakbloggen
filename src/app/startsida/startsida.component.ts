import { Component, OnInit } from '@angular/core';
import { ArtiklarService } from '../artiklar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {

  constructor(private artikelService: ArtiklarService, private route: ActivatedRoute) { }
  artiklar;
  artikel;
  page=0;
  ngOnInit(): void {
    this.artiklar = this.artikelService.getArtiklar();
    console.log("wtfstart" + this.artiklar.length);
    this.route.queryParams.subscribe(params => {
      this.page = params["page"];
      if(this.page){
        this.artikel = this.artiklar[this.page];
      }

      else if (this.artiklar.length) {
        this.artikel = this.artiklar[0];
      }
      
    })
  }
  getArtiklar(){
    return this.artikelService.getArtiklar();
    
  }
}
