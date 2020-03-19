import { Component } from '@angular/core';
import { InloggningService } from './inloggning.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bakbloggen';

  constructor(public inloggningService: InloggningService){}

  ngOnInit(){

}

}
