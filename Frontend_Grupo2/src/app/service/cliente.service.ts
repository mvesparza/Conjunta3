import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8083/api/clientes'; // URL base de la API

  // Opciones para la solicitud HTTP
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Crear un nuevo cliente
  public crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente, this.httpOptions);
  }

  // Obtener todos los clientes
  public obtenerTodosLosClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  // Obtener un cliente por su ID
  public obtenerClientePorId(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  // Actualizar un cliente existente
  public actualizarCliente(id: number, cliente: Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Cliente>(url, cliente, this.httpOptions);
  }

  // Eliminar un cliente por su ID
  public eliminarCliente(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
