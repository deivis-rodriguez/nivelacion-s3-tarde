import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaTripulantesComponent } from './lista-tripulantes/lista-tripulantes.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { RegistrarTripulanteComponent } from './registrar-tripulante/registrar-tripulante.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaTripulantesComponent,
    AyudaComponent,
    RegistrarTripulanteComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
