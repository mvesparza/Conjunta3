import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from '../service/ventas.service';
import { ProductoService } from '../service/producto.service';
import { ClienteService } from '../service/cliente.service';
import { Ventas } from '../models/ventas';
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../models/cliente'; // Asegúrate de tener el modelo de Cliente

@Component({
  selector: 'app-detalle-ventas',
  templateUrl: './detalle-ventas.component.html',
  styleUrls: ['./detalle-ventas.component.css']
})
export class DetalleVentasComponent implements OnInit {
  venta: Ventas | null = null;
  productos: Producto[] = [];
  clienteNombre: string = '';
  error: string | null = null;

  constructor(
    private ventasService: VentasService,
    private productoService: ProductoService,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerVentaDetalle();
  }

  obtenerVentaDetalle(): void {
    const ventaId = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(ventaId)) {
      this.error = 'ID de venta no válido.';
      return;
    }

    this.ventasService.obtenerVentaPorId(ventaId).subscribe(
      (venta: Ventas) => {
        this.venta = venta;
        if (venta.clienteId) {
          this.obtenerNombreCliente(venta.clienteId);
        }
        // Obtén los productos relacionados con esta venta
        // Ajusta el método si es necesario para obtener solo los productos de la venta
        this.obtenerProductos();
      },
      error => {
        console.error('Error al obtener los detalles de la venta', error);
        this.error = 'No se pudieron obtener los detalles de la venta. Inténtelo de nuevo más tarde.';
      }
    );
  }

  obtenerNombreCliente(clienteId: number): void {
    this.clienteService.obtenerClientePorId(clienteId).subscribe(
      (cliente: Cliente) => this.clienteNombre = cliente.nombre,
    );
  }

  obtenerProductos(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (productos: Producto[]) => this.productos = productos,
      error => {
        console.error('Error al obtener productos', error);
        this.error = 'No se pudieron obtener los productos. Inténtelo de nuevo más tarde.';
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/listaventas']);
  }
}
