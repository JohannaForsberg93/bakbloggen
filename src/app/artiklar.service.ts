import { Injectable } from "@angular/core";
import { Artiklar } from "./artiklar";

@Injectable({
  providedIn: "root",
})
export class ArtiklarService {
  static readonly ARTIKLAR: string = "artiklar";
  artiklar = [
    new Artiklar(
      "Sega Chokladmuffins",
      "Jättegoda muffins tjoho!",
      "Frida Bengtsson",
      2
    ),
    new Artiklar(
      "Knäckebröd med ost",
      "Tag ett styck knäckebröd. Skiva ost. Lägg den skivade osten på knäckebrödet",
      "Oscar Törnqvist",
      10
    ),
    new Artiklar(
      "Hallongrottor",
      "Ingredienser: 4,5 dl vetemjöl, 1 dl socker, 1 tsk bakpulver, 2 tsk vaniljsocker, 200 g smör, 1 dl fast hallonsylt. Blanda samman mjöl, socker, bakpulver och vaniljsocker i en skål. Skär matfettet i mindre bitar och tillsätt det. Arbeta snabbt samman till en deg, gärna i matberedare.Forma degen till valnötsstora bollar. Lägg i muffinsformar på plåtar.Fyllning: Gör en fördjupning i varje kaka och klicka i lite sylt. Grädda i mitten av ugnen i 200 grader i ca 10 minuter.",
      "Johanna Forsberg",
      4
    ),
  ];

  // constructor() { }

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
  public deleteAll() {
    localStorage.clear();
  }
<<<<<<< HEAD
  public getSenasteArtiklar(n:number){
    let artiklarJSON = localStorage.getItem(ArtiklarService.ARTIKLAR);
    if (artiklarJSON) {
      this.artiklar = JSON.parse(artiklarJSON);
    }
    return this.artiklar.slice(0, n);
  }
  
=======
>>>>>>> d12d19434b7b8cd3c8f28d97c6aabd4eadf2dee2
}
