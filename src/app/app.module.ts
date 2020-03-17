import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { SenasteArtiklarComponent } from './senaste-artiklar/senaste-artiklar.component';
import { AllaArtiklarComponent } from './alla-artiklar/alla-artiklar.component';
import { LoggaInComponent } from './logga-in/logga-in.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StartsidaComponent,
    SenasteArtiklarComponent,
    AllaArtiklarComponent,
    LoggaInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
