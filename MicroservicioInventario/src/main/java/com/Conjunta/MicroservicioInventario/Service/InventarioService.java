package com.Conjunta.MicroservicioInventario.Service;

import com.Conjunta.MicroservicioInventario.DTO.InventarioDTO;
import com.Conjunta.MicroservicioInventario.Model.Inventario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public interface InventarioService {

    // Crear un nuevo producto
    Inventario crearProducto(InventarioDTO inventarioDTO);

    // Obtener todos los productos
    List<Inventario> obtenerTodosLosProductos();

    // Obtener un producto por su ID
    Optional<Inventario> obtenerProductoPorId(Long id);

    // Actualizar un producto existente
    Optional<Inventario> actualizarProducto(Long id, InventarioDTO inventarioDTO);

    // Eliminar un producto por su ID
    boolean eliminarProducto(Long id);
}
