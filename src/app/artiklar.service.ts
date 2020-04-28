import { Injectable } from "@angular/core";
import { Artiklar } from "./artiklar";

@Injectable({
  providedIn: "root",
})
export class ArtiklarService {
  static readonly ARTIKLAR: string = "artiklar";
  artiklar = [
    new Artiklar("Title", "content", "author", 1),
    new Artiklar("Title", "content", "author", 1),
    new Artiklar("Title,", "content", "author", 1),
  ];

  constructor() {}

  public getArtiklar() {
    let artiklarJSON = localStorage.getItem(ArtiklarService.ARTIKLAR);
    if (artiklarJSON) {
      this.artiklar = JSON.parse(artiklarJSON);
    }
    return this.artiklar;
  }
  public sparaArtikel(artikel: Artiklar) {
    this.artiklar.unshift(artikel);
    localStorage.setItem(
      ArtiklarService.ARTIKLAR,
      JSON.stringify(this.artiklar)
    );
  }
  public deleteArtikel(idx) {
    this.artiklar.splice(idx, 1);
    localStorage.setItem(
      ArtiklarService.ARTIKLAR,
      JSON.stringify(this.artiklar)
    );
  }
}
