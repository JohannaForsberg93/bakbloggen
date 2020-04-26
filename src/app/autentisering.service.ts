import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentiseringService {
  inloggad:boolean = false;
  loggain(){
    this.inloggad = true;
    this.source.next(this.inloggad);
  }
  loggaut(){
    this.inloggad = false;
    this.source.next(this.inloggad);
  }
  ärInloggad(){
    return this.inloggad;
  }
  constructor() {
  
  }
  private source = new BehaviorSubject<boolean>(false);
  public observableSource = this.source.asObservable();
}
