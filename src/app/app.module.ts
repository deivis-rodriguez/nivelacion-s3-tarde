import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaTripulantesComponent } from './lista-tripulantes/lista-tripulantes.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { RegistrarTripulanteComponent } from './registrar-tripulante/registrar-tripulante.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaTripulantesComponent,
    AyudaComponent,
    RegistrarTripulanteComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
