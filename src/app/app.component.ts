import { Component } from '@angular/core';
import { AutentiseringService  } from './autentisering.service';
import { ArtiklarService } from './artiklar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private autentiseringService: AutentiseringService, private artikelService: ArtiklarService){
    
  }
  artiklar;
  inloggad = true;
  title = 'bakbloggen';
  authCheck:string = "Inloggad";
  ngOnInit(): void {
    
      this.artiklar = this.artikelService.getArtiklar();
      this.autentiseringService.observableSource.subscribe(data => {
          this.inloggad = data;
    });
    
  }
  
  
 }
