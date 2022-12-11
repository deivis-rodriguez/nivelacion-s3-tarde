import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Tripulante } from '../models/tripulante';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TripulantesService {

  private url: string = 'http://localhost:8080/tripulantes';

  constructor(private http: HttpClient) {
  }

  public listar(): Observable<Tripulante[]> {
    return this.http.get<Tripulante[]>(this.url);
  }
  public getTripulante(id: string): Observable<Tripulante> {
    return this.http.get<Tripulante>(`this.url/${id}`);
  }
  public crearTripulante(tripulante: Tripulante): Observable<Tripulante> {
    return this.http.post<Tripulante>(this.url, tripulante);
  }
  public actualizarTripulante(tripulante: Tripulante, id: string): Observable<Tripulante> {
    return this.http.put<Tripulante>(`this.url/${id}`, tripulante);
  }
  public eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`this.url/${id}`);
  }

}
