import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InloggningService {

  inloggad: boolean;
  

  constructor() { }

  inloggning(){
    this.inloggad = true;
    

  }

  utloggning(){
    this.inloggad = false;
    
  }

  

}
