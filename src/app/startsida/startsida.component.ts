import { Component, OnInit } from '@angular/core';
import { InloggningService } from '../inloggning.service'

@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {
  

  constructor(public _InloggningService: InloggningService) { }

  ngOnInit(): void {
   
  }

}
