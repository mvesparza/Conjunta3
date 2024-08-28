import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../service/producto.service'; // Ajusta la ruta según tu estructura
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];
  error: string | null = null;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService, // Inyectar ToastrService
    private router: Router // Inyectar Router
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
        console.log('Productos obtenidos:', productos); // Agregar console log
      },
      error => {
        console.error('Error al obtener productos', error);
        this.error = 'No se pudieron obtener los productos. Inténtelo de nuevo más tarde.';
      }
    );
  }

  borrarProducto(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('¿Está seguro de que desea eliminar este producto?')) {
        this.productoService.eliminarProducto(id).subscribe(
          () => {
            this.productos = this.productos.filter(producto => producto.id !== id);
            this.toastr.success('Producto eliminado exitosamente', 'Éxito'); // Mensaje de éxito
          },
          error => {
            console.error('Error al borrar producto', error);
            this.toastr.error('No se pudo borrar el producto. Inténtelo de nuevo más tarde.', 'Error'); // Mensaje de error
          }
        );
      }
    }
  }

  verDetalles(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/detalleproducto', id]); // Redirige a la vista de detalles del producto
    }
  }
}
