package com.Conjunta.MicroservicioInventario.Service;

import com.Conjunta.MicroservicioInventario.DTO.InventarioDTO;
import com.Conjunta.MicroservicioInventario.Model.Inventario;
import com.Conjunta.MicroservicioInventario.Repository.InventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventarioServiceImpl implements InventarioService {

    @Autowired
    private InventarioRepository inventarioRepository;

    @Override
    public Inventario crearProducto(InventarioDTO inventarioDTO) {
        Inventario inventario = new Inventario();
        inventario.setNombre(inventarioDTO.getNombre());
        inventario.setPrecioUnitario(inventarioDTO.getPrecioUnitario());
        inventario.setCantidadStock(inventarioDTO.getCantidadStock());
        return inventarioRepository.save(inventario);
    }

    @Override
    public List<Inventario> obtenerTodosLosProductos() {
        return inventarioRepository.findAll();
    }

    @Override
    public Optional<Inventario> obtenerProductoPorId(Long id) {
        return inventarioRepository.findById(id);
    }

    @Override
    public Optional<Inventario> actualizarProducto(Long id, InventarioDTO inventarioDTO) {
        return inventarioRepository.findById(id).map(producto -> {
            producto.setNombre(inventarioDTO.getNombre());
            producto.setPrecioUnitario(inventarioDTO.getPrecioUnitario());
            producto.setCantidadStock(inventarioDTO.getCantidadStock());
            return inventarioRepository.save(producto);
        });
    }

    @Override
    public boolean eliminarProducto(Long id) {
        if (inventarioRepository.existsById(id)) {
            inventarioRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
