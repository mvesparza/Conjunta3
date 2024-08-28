import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente = {
    id: undefined,
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    fechaNacimiento: ''
  };
  error: string | null = null;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    public router: Router,  // Inyección del Router
    private toastr: ToastrService // Inyección del ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.clienteService.obtenerClientePorId(id).subscribe(
        (cliente: Cliente) => this.cliente = cliente,
        error => {
          console.error('Error al obtener cliente', error);
          this.error = 'No se pudo obtener el cliente. Inténtelo de nuevo más tarde.';
        }
      );
    }
  }

  actualizarCliente(): void {
    if (this.cliente.id !== undefined) {
      this.clienteService.actualizarCliente(this.cliente.id, this.cliente).subscribe(
        () => {
          this.toastr.success('Cliente actualizado exitosamente', 'Éxito');
          this.router.navigate(['/']); // Redirige a la lista de clientes
        },
        error => {
          console.error('Error al actualizar cliente', error);
          this.toastr.error('No se pudo actualizar el cliente. Inténtelo de nuevo más tarde.', 'Error');
        }
      );
    }
  }
}
