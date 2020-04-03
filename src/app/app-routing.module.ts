import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartsidaComponent} from './startsida/startsida.component'
import { SenasteArtiklarComponent } from './senaste-artiklar/senaste-artiklar.component';
import { AllaArtiklarComponent } from './alla-artiklar/alla-artiklar.component';
import { LoggaInComponent } from './logga-in/logga-in.component';
import { NyArtikelComponent } from './ny-artikel/ny-artikel.component'


const routes: Routes = [
  {path: "", component: StartsidaComponent},
  {path: "senaste-artiklar", component: SenasteArtiklarComponent},
  {path: "alla-artiklar", component: AllaArtiklarComponent},
  {path: "logga-in", component: LoggaInComponent},
  {path: "ny-artikel", component: NyArtikelComponent}
]; 

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
