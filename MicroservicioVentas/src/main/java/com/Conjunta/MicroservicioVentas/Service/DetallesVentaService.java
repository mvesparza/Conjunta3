package com.Conjunta.MicroservicioVentas.Service;

import com.Conjunta.MicroservicioVentas.DTO.DetallesVentaDTO;
import com.Conjunta.MicroservicioVentas.Model.DetallesVenta;

import java.util.List;

public interface DetallesVentaService {

    // Crear un nuevo detalle de venta
    DetallesVenta crearDetalleVenta(DetallesVentaDTO detallesVentaDTO);

    // Obtener todos los detalles de venta
    List<DetallesVenta> obtenerTodosLosDetalles();

    // Obtener un detalle de venta por su ID
    DetallesVenta obtenerDetalleVentaPorId(Long id);

    // Actualizar un detalle de venta existente
    DetallesVenta actualizarDetalleVenta(Long id, DetallesVentaDTO detallesVentaDTO);

    // Eliminar un detalle de venta por su ID
    boolean eliminarDetalleVenta(Long id);

    // Obtener detalles de venta por ID de la venta
    List<DetallesVenta> obtenerDetallesPorVentaId(Long ventaId);
}
