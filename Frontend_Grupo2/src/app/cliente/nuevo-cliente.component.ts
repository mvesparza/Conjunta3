import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  cliente: Cliente = new Cliente();
  error: string | null = null;

  constructor(
    public router: Router,
    private clienteService: ClienteService,
    private toastr: ToastrService // Inyectar ToastrService
  ) {}

  crearCliente(form: any): void {
    if (form.invalid) {
      return; // Prevent submission if the form is invalid
    }

    this.clienteService.crearCliente(this.cliente).subscribe(
      () => {
        this.toastr.success('Cliente creado exitosamente', 'Éxito'); // Mensaje de éxito
        this.router.navigate(['/']);
      },
      error => {
        this.toastr.error('No se pudo crear el cliente. Inténtelo de nuevo más tarde.', 'Error'); // Mensaje de error
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
