import { Component, OnInit } from '@angular/core';
import { VentasService } from '../service/ventas.service'; // Ajusta la ruta según tu estructura
import { Ventas } from '../models/ventas'; // Ajusta la ruta según tu estructura
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {
  ventas: Ventas[] = [];
  error: string | null = null;

  constructor(
    private ventasService: VentasService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(): void {
    this.ventasService.obtenerTodasLasVentas().subscribe(
      (ventas: Ventas[]) => this.ventas = ventas,
      error => {
        console.error('Error al obtener ventas', error);
        this.error = 'No se pudieron obtener las ventas. Inténtelo de nuevo más tarde.';
      }
    );
  }

  borrarVenta(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('¿Está seguro de que desea eliminar esta venta?')) {
        this.ventasService.eliminarVenta(id).subscribe(
          () => {
            this.ventas = this.ventas.filter(venta => venta.id !== id);
            this.toastr.success('Venta eliminada exitosamente', 'Éxito');
          },
          error => {
            console.error('Error al borrar venta', error);
            this.toastr.error('No se pudo borrar la venta. Inténtelo de nuevo más tarde.', 'Error');
          }
        );
      }
    }
  }
}
