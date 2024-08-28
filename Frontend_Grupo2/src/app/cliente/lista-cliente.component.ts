import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  error: string | null = null;

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService // Inyectar ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.obtenerTodosLosClientes().subscribe(
      (clientes: Cliente[]) => this.clientes = clientes,
      error => {
        console.error('Error al obtener clientes', error);
        this.error = 'No se pudieron obtener los clientes. Inténtelo de nuevo más tarde.';
      }
    );
  }

  borrarCliente(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('¿Está seguro de que desea eliminar este cliente?')) {
        this.clienteService.eliminarCliente(id).subscribe(
          () => {
            this.clientes = this.clientes.filter(cliente => cliente.id !== id);
            this.toastr.success('Cliente eliminado exitosamente', 'Éxito'); // Mensaje de éxito
          },
          error => {
            console.error('Error al borrar cliente', error);
            this.toastr.error('No se pudo borrar el cliente. Inténtelo de nuevo más tarde.', 'Error'); // Mensaje de error
          }
        );
      }
    }
  }
}
