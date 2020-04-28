import { Component, OnInit } from '@angular/core';
import { AutentiseringService } from '../autentisering.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logga-in',
  templateUrl: './logga-in.component.html',
  styleUrls: ['./logga-in.component.css']
})
export class LoggaInComponent implements OnInit {

  constructor(private autentiseringService: AutentiseringService, private router: Router) { }

  ngOnInit(): void {
  }
  onClick(){
    
    this.autentiseringService.loggain();
    console.log(this.autentiseringService);
    this.readIt();
  }
  readIt(){
    this.router.navigate([''], {queryParams: {page: 0}});
  }

}
