import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service'; // Ajusta la ruta según tu estructura
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  error: string | null = null;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService // Inyectar ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.obtenerClientePorId(+id).subscribe(
        (cliente: Cliente) => {
          this.cliente = cliente;
        },
        error => {
          console.error('Error al obtener cliente', error);
          this.error = 'No se pudieron obtener los detalles del cliente. Inténtelo de nuevo más tarde.';
        }
      );
    }
  }

  volver(): void {
    this.router.navigate(['/lista']); // Redirige a la lista de clientes
  }
}
