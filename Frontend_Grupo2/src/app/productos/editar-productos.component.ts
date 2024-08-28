import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../service/producto.service'; // Ajusta la ruta según tu estructura
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  producto: Producto = new Producto('', 0, 0); // Inicializa el producto
  error: string | null = null;
  id: number | undefined;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService // Inyectar ToastrService
  ) { }

  ngOnInit(): void {
    // Obtén el ID del producto de la ruta
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.obtenerProducto();
    }
  }

  obtenerProducto(): void {
    if (this.id !== undefined) {
      this.productoService.obtenerProductoPorId(this.id).subscribe(
        (producto: Producto) => {
          this.producto = producto;
        },
        error => {
          console.error('Error al obtener producto', error);
          this.error = 'No se pudo obtener el producto. Inténtelo de nuevo más tarde.';
        }
      );
    }
  }

  guardarCambios(): void {
    if (this.id !== undefined) {
      this.productoService.actualizarProducto(this.id, this.producto).subscribe(
        () => {
          this.toastr.success('Producto actualizado exitosamente', 'Éxito');
          this.router.navigate(['/listaproductos']); // Redirige a la lista de productos
        },
        error => {
          console.error('Error al actualizar producto', error);
          this.toastr.error('No se pudo actualizar el producto. Inténtelo de nuevo más tarde.', 'Error');
        }
      );
    }
  }

  cancelar(): void {
    this.router.navigate(['/listaproductos']); // Redirige a la página anterior
  }
}
