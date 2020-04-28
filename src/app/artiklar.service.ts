import { Injectable } from '@angular/core';
import { Artiklar } from './artiklar';

@Injectable({
  providedIn: 'root'
})
export class ArtiklarService {
  static readonly ARTIKLAR: string = "artiklar";
    artiklar = [new Artiklar("Sega Chokladmuffins", "Jättegoda muffins tjoho!", "Frida Bengtsson", 2),
    new Artiklar("Knäckebröd med ost", "Tag ett styck knäckebröd. Skiva ost. Lägg den skivade osten på knäckebrödet", "Oscar Törnqvist", 10),
    new Artiklar("Styckad kattsoppa,", "Tag din grannes katt och stycka den i bitar och lägg ner i kastrull. Häll i grädde och krydda med salt och peppar. Perfekt att bjuda grannarna på!", "Johanna Forsberg", 3)
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
  public deleteAll(){
    localStorage.clear();
  }
  
}
  
  