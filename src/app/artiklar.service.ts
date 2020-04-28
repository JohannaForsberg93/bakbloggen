import { Injectable } from '@angular/core';
import { Artiklar } from './artiklar';

@Injectable({
  providedIn: 'root'
})
export class ArtiklarService {
  static readonly ARTIKLAR: string = "artiklar";
    artiklar = [new Artiklar("titel1", "content1", "author1", 1),
    new Artiklar("t2", "c2", "a2", 1),
    new Artiklar("t3,", "c3", "a3", 1)
    ]
    
  constructor() { }

  public getArtiklar(){
    let artiklarJSON = localStorage.getItem(ArtiklarService.ARTIKLAR);
    if (artiklarJSON) {
      this.artiklar = JSON.parse(artiklarJSON);
    }
    return this.artiklar;
  }
  public sparaArtikel(artikel: Artiklar){
    this.artiklar.unshift(artikel);
    localStorage.setItem(ArtiklarService.ARTIKLAR, JSON.stringify(this.artiklar));
  }
  public deleteArtikel(idx){
    
    this.artiklar.splice(idx, 1);
    localStorage.setItem(ArtiklarService.ARTIKLAR, JSON.stringify(this.artiklar));
  }
  
}
  
  