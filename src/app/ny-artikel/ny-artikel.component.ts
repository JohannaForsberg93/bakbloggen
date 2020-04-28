import { Component, OnInit } from '@angular/core';
import { Artiklar } from '../artiklar';
import { ArtiklarService } from '../artiklar.service';
import { AutentiseringService } from '../autentisering.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ny-artikel',
  templateUrl: './ny-artikel.component.html',
  styleUrls: ['./ny-artikel.component.css']
})
export class NyArtikelComponent implements OnInit {
  model: Artiklar;
  constructor(private artikelService: ArtiklarService, private autentiseringService: AutentiseringService, private router: Router) { }
  inloggad = false;
  ngOnInit(): void {
      this.model = new Artiklar('', '', '', null);
      this.autentiseringService.observableSource.subscribe(data => {
      this.inloggad = data;
      this.formControl = new FormControl("", [Validators.max(100), Validators.min(0)])
    });
  }
  
  spara(){
    this.artikelService.sparaArtikel(this.model);
    this.readIt();
  }
  readIt(){
    this.router.navigate([''], {queryParams: {page: 0}});
  }

  formControl;
  

  get diagnostic() { return JSON.stringify(this.model); }
}

