import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tripulante } from '../models/tripulante';
import { TokenStorageService } from '../services/token-storage.service';
import { TripulantesService } from '../services/tripulantes.service';

@Component({
  selector: 'app-lista-tripulantes',
  templateUrl: './lista-tripulantes.component.html',
  styleUrls: ['./lista-tripulantes.component.css']
})
export class ListaTripulantesComponent implements OnInit {

  public tripulantes: Tripulante[] = []
  variable: boolean = false;

  constructor(private servicioTripulante: TripulantesService, private tokenStorage: TokenStorageService, private location: Location) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.servicioTripulante.listar().subscribe((respuesta) => {
        this.tripulantes = respuesta;
      })
    }else{
      this.location.replaceState("/login")
      window.location.reload()
    }
  }



}
