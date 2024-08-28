export class Cliente {
    id?: number; // El '?' indica que el campo es opcional
    nombre: string;
    email: string;
    telefono?: string;
    direccion?: string;
    fechaNacimiento?: string; // Usamos string en lugar de LocalDate para representar fechas
  
    constructor(
      id?: number,
      nombre: string = '',
      email: string = '',
      telefono?: string,
      direccion?: string,
      fechaNacimiento?: string
    ) {
      this.id = id;
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
      this.direccion = direccion;
      this.fechaNacimiento = fechaNacimiento;
    }
  }
  