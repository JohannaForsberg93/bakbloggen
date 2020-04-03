import { Injectable } from '@angular/core';
import { Artiklar } from './artiklar';

@Injectable({
  providedIn: 'root'
})
export class ArtiklarService {
    
    coronas = [new Artiklar("titel1", "content1", "author1", "time1"),
    new Artiklar("t2", "c2", "a2", "t2"),
    new Artiklar("t3,", "c3", "a3", "t3")
    ]
    
  constructor() { }

  public getArtiklar(){
    return this.coronas;
  }
  public sparaArtikel(artikel: Artiklar){
    this.coronas.push(artikel);
  }
}
