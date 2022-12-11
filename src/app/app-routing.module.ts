import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaTripulantesComponent } from './lista-tripulantes/lista-tripulantes.component';
import { LoginComponent } from './login/login.component';
import { RegistrarTripulanteComponent } from './registrar-tripulante/registrar-tripulante.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listar-tripulantes', component: ListaTripulantesComponent },
  { path: 'registrar-tripulante', component: RegistrarTripulanteComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
