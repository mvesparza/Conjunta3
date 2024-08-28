import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../service/producto.service'; // Ajusta la ruta según tu estructura
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  producto: Producto | null = null;
  error: string | null = null;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService // Inyectar ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productoService.obtenerProductoPorId(id).subscribe(
        producto => this.producto = producto,
        error => {
          console.error('Error al obtener el producto', error);
          this.error = 'No se pudo obtener el producto. Inténtelo de nuevo más tarde.';
        }
      );
    }
  }

  volverLista(): void {
    this.router.navigate(['/listaproductos']); // Redirige a la lista de productos
  }
}
