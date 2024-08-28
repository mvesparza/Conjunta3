import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ventas } from '../models/ventas'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private apiUrl = 'http://localhost:8082/api/ventas'; // URL base de la API

  // Opciones para la solicitud HTTP
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Crear una nueva venta
  public crearVenta(venta: Ventas): Observable<Ventas> {
    return this.http.post<Ventas>(this.apiUrl, venta, this.httpOptions);
  }

  // Obtener todas las ventas
  public obtenerTodasLasVentas(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>(this.apiUrl);
  }

  // Obtener una venta por su ID
  public obtenerVentaPorId(id: number): Observable<Ventas> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ventas>(url);
  }

  // Actualizar una venta existente
  public actualizarVenta(id: number, venta: Ventas): Observable<Ventas> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Ventas>(url, venta, this.httpOptions);
  }

  // Eliminar una venta por su ID
  public eliminarVenta(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
