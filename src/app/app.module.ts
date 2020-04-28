import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { SenasteArtiklarComponent } from './senaste-artiklar/senaste-artiklar.component';
import { AllaArtiklarComponent } from './alla-artiklar/alla-artiklar.component';
import { LoggaInComponent } from './logga-in/logga-in.component';
import { AppRoutingModule } from './app-routing.module';
import { NyArtikelComponent } from './ny-artikel/ny-artikel.component';

@NgModule({
  declarations: [
    AppComponent,
    StartsidaComponent,
    SenasteArtiklarComponent,
    AllaArtiklarComponent,
    LoggaInComponent,
    NyArtikelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
