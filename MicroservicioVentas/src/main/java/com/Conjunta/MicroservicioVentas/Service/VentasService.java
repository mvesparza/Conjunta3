package com.Conjunta.MicroservicioVentas.Service;

import com.Conjunta.MicroservicioVentas.DTO.VentasDTO;
import com.Conjunta.MicroservicioVentas.Model.Ventas;

import java.util.List;

public interface VentasService {

    // Crear una nueva venta
    Ventas crearVenta(VentasDTO ventasDTO);

    // Obtener todas las ventas
    List<Ventas> obtenerTodasLasVentas();

    // Obtener una venta por su ID
    Ventas obtenerVentaPorId(Long id);

    // Actualizar una venta existente
    Ventas actualizarVenta(Long id, VentasDTO ventasDTO);

    // Eliminar una venta por su ID
    boolean eliminarVenta(Long id);
}
