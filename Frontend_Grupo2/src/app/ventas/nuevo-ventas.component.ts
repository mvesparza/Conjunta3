import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasService } from '../service/ventas.service';
import { ClienteService } from '../service/cliente.service';
import { Ventas } from '../models/ventas';
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-ventas',
  templateUrl: './nuevo-ventas.component.html',
  styleUrls: ['./nuevo-ventas.component.css']
})
export class NuevoVentasComponent implements OnInit {
  venta: Ventas = new Ventas();
  clientes: Cliente[] = [];
  error: string | null = null;

  constructor(
    public router: Router,
    private ventasService: VentasService,
    private clienteService: ClienteService,
    private toastr: ToastrService
  ) {}

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

  seleccionarCliente(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.venta.clienteId = Number(target.value);
  }

  crearVenta(form: any): void {
    if (form.invalid) {
      return;
    }

    this.ventasService.crearVenta(this.venta).subscribe(
      () => {
        this.toastr.success('Venta creada exitosamente', 'Éxito');
        this.router.navigate(['/listaventas']);
      },
      error => {
        this.toastr.error('No se pudo crear la venta. Inténtelo de nuevo más tarde.', 'Error');
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/listaventas']);
  }
}
