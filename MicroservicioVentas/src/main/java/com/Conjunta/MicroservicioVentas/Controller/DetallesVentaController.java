package com.Conjunta.MicroservicioVentas.Controller;

import com.Conjunta.MicroservicioVentas.DTO.DetallesVentaDTO;
import com.Conjunta.MicroservicioVentas.Model.DetallesVenta;
import com.Conjunta.MicroservicioVentas.Service.DetallesVentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/detalles-venta")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8082"})
public class DetallesVentaController {

    @Autowired
    private DetallesVentaService detallesVentaService;

    // Crear un nuevo detalle de venta
    @PostMapping
    public ResponseEntity<DetallesVenta> crearDetalleVenta(@RequestBody DetallesVentaDTO detallesVentaDTO) {
        DetallesVenta detalle = detallesVentaService.crearDetalleVenta(detallesVentaDTO);
        return ResponseEntity.ok(detalle);
    }

    // Obtener todos los detalles de venta
    @GetMapping
    public ResponseEntity<List<DetallesVenta>> obtenerTodosLosDetalles() {
        List<DetallesVenta> detalles = detallesVentaService.obtenerTodosLosDetalles();
        return ResponseEntity.ok(detalles);
    }

    // Obtener un detalle de venta por su ID
    @GetMapping("/{id}")
    public ResponseEntity<DetallesVenta> obtenerDetalleVentaPorId(@PathVariable("id") Long id) {
        DetallesVenta detalle = detallesVentaService.obtenerDetalleVentaPorId(id);
        if (detalle != null) {
            return ResponseEntity.ok(detalle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Actualizar un detalle de venta existente
    @PutMapping("/{id}")
    public ResponseEntity<DetallesVenta> actualizarDetalleVenta(
            @PathVariable("id") Long id,
            @RequestBody DetallesVentaDTO detallesVentaDTO) {
        DetallesVenta detalle = detallesVentaService.actualizarDetalleVenta(id, detallesVentaDTO);
        if (detalle != null) {
            return ResponseEntity.ok(detalle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un detalle de venta por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarDetalleVenta(@PathVariable("id") Long id) {
        boolean eliminado = detallesVentaService.eliminarDetalleVenta(id);
        if (eliminado) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Obtener detalles de venta por ID de la venta
    @GetMapping("/venta/{ventaId}")
    public ResponseEntity<List<DetallesVenta>> obtenerDetallesPorVentaId(@PathVariable("ventaId") Long ventaId) {
        List<DetallesVenta> detalles = detallesVentaService.obtenerDetallesPorVentaId(ventaId);
        return ResponseEntity.ok(detalles);
    }
}
