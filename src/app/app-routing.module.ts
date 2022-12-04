import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaTripulantesComponent } from './lista-tripulantes/lista-tripulantes.component';
import { RegistrarTripulanteComponent } from './registrar-tripulante/registrar-tripulante.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'listar-tripulantes', component: ListaTripulantesComponent },
  { path: 'registrar-tripulante', component: RegistrarTripulanteComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
