import { Component, OnInit } from '@angular/core';
import { Tripulante } from '../models/tripulante';
import { TripulantesService } from '../services/tripulantes.service';

@Component({
  selector: 'app-lista-tripulantes',
  templateUrl: './lista-tripulantes.component.html',
  styleUrls: ['./lista-tripulantes.component.css']
})
export class ListaTripulantesComponent implements OnInit {


  public tripulantes: Tripulante[] = []
  variable = false;

  constructor(private servicioTripulante: TripulantesService) {
  }

  ngOnInit(): void {
    this.servicioTripulante.listar().subscribe((respuesta) => {
      this.tripulantes = respuesta;
    })
  }



}
