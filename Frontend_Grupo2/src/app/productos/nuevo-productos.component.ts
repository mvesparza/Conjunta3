import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../service/producto.service'; // Ajusta la ruta según tu estructura
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-nuevo-productos',
  templateUrl: './nuevo-productos.component.html',
  styleUrls: ['./nuevo-productos.component.css']
})
export class NuevoProductosComponent {
  producto: Producto = new Producto('', 0, 0); // Inicializa el producto
  error: string | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private toastr: ToastrService // Inyectar ToastrService
  ) { }

  guardarProducto(): void {
    this.productoService.crearProducto(this.producto).subscribe(
      () => {
        this.toastr.success('Producto creado exitosamente', 'Éxito');
        this.router.navigate(['/listaproductos']); // Redirige a la página anterior
      },
      error => {
        console.error('Error al crear producto', error);
        this.toastr.error('No se pudo crear el producto. Inténtelo de nuevo más tarde.', 'Error');
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/listaproductos']); // Redirige a la página anterior
  }
}
