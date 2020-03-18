import { Component, OnInit } from '@angular/core';
import { InloggningService } from '.././inloggning.service'

@Component({
  selector: 'app-logga-in',
  templateUrl: './logga-in.component.html',
  styleUrls: ['./logga-in.component.css']
})
export class LoggaInComponent implements OnInit {

  constructor(public _InloggningService: InloggningService) {
   }

  ngOnInit(): void {
    
  }


}
