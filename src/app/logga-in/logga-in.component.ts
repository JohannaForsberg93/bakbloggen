import { Component, OnInit } from '@angular/core';
import { InloggningService } from '.././inloggning.service'

@Component({
  selector: 'app-logga-in',
  templateUrl: './logga-in.component.html',
  styleUrls: ['./logga-in.component.css']
})
export class LoggaInComponent implements OnInit {

  inloggad: boolean = false;
 

  constructor(public _InloggningService: InloggningService) {
   }

  ngOnInit(): void {
    
  }

  loggaIn(){
   this._InloggningService.inloggning(); 
    //Hämtar inloggning-funktion från Service
   this.inloggad = this._InloggningService.inloggad;
    //inloggad får värdet av inloggad från Service (samma namn fast olika class-proprty)

    console.log("Nu körs loggaIn-funktionen som hämtar värde från service")
  }

  loggaUt(){
    this._InloggningService.utloggning();
    this.inloggad = this._InloggningService.inloggad;
  }

}
