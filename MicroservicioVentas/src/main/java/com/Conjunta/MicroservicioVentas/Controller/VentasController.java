package com.Conjunta.MicroservicioVentas.Controller;

import com.Conjunta.MicroservicioVentas.DTO.VentasDTO;
import com.Conjunta.MicroservicioVentas.Model.Ventas;
import com.Conjunta.MicroservicioVentas.Service.VentasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8082"})
public class VentasController {

    @Autowired
    private VentasService ventasService;

    @PostMapping
    public Ventas crearVenta(@RequestBody VentasDTO ventasDTO) {
        return ventasService.crearVenta(ventasDTO);
    }

    @GetMapping
    public List<Ventas> obtenerTodasLasVentas() {
        return ventasService.obtenerTodasLasVentas();
    }

    @GetMapping("/{id}")
    public Ventas obtenerVentaPorId(@PathVariable Long id) {
        return ventasService.obtenerVentaPorId(id);
    }

    @PutMapping("/{id}")
    public Ventas actualizarVenta(@PathVariable Long id, @RequestBody VentasDTO ventasDTO) {
        return ventasService.actualizarVenta(id, ventasDTO);
    }

    @DeleteMapping("/{id}")
    public boolean eliminarVenta(@PathVariable Long id) {
        return ventasService.eliminarVenta(id);
    }
}
