package com.Conjunta.MicroservicioInventario.Controller;

import com.Conjunta.MicroservicioInventario.DTO.InventarioDTO;
import com.Conjunta.MicroservicioInventario.Model.Inventario;
import com.Conjunta.MicroservicioInventario.Service.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventario")
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8084"})
public class InventarioController {

    @Autowired
    private InventarioService inventarioService;

    // Crear un nuevo producto
    @PostMapping
    public ResponseEntity<Inventario> crearProducto(@RequestBody InventarioDTO inventarioDTO) {
        Inventario producto = inventarioService.crearProducto(inventarioDTO);
        return ResponseEntity.ok(producto);
    }

    // Obtener todos los productos
    @GetMapping
    public ResponseEntity<List<Inventario>> obtenerTodosLosProductos() {
        List<Inventario> productos = inventarioService.obtenerTodosLosProductos();
        return ResponseEntity.ok(productos);
    }

    // Obtener un producto por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Inventario> obtenerProductoPorId(@PathVariable("id") Long id) {
        Optional<Inventario> producto = inventarioService.obtenerProductoPorId(id);
        return producto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Actualizar un producto existente
    @PutMapping("/{id}")
    public ResponseEntity<Inventario> actualizarProducto(
            @PathVariable("id") Long id,
            @RequestBody InventarioDTO inventarioDTO) {
        Optional<Inventario> producto = inventarioService.actualizarProducto(id, inventarioDTO);
        return producto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Eliminar un producto por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable("id") Long id) {
        boolean eliminado = inventarioService.eliminarProducto(id);
        return eliminado ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
