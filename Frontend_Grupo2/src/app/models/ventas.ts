export class Ventas {
    id?: number; // El '?' indica que el campo es opcional
    clienteId: number;
    fechaVenta: string; // Utilizamos string para representar fechas en formato ISO
    total: number;
  
    constructor(
      id?: number,
      clienteId: number = 0,
      fechaVenta: string = '',
      total: number = 0
    ) {
      this.id = id;
      this.clienteId = clienteId;
      this.fechaVenta = fechaVenta;
      this.total = total;
    }
  }
  