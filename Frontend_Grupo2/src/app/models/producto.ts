export class Producto {
    id?: number; // Opcional
    nombre: string;
    precioUnitario: number;
    cantidadStock: number;
  
    constructor(nombre: string, precioUnitario: number, cantidadStock: number, id?: number) {
      this.nombre = nombre;
      this.precioUnitario = precioUnitario;
      this.cantidadStock = cantidadStock;
      this.id = id; // Opcional
    }
  }
  