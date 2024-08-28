package com.Conjunta.MicroservicioVentas.Service;

import com.Conjunta.MicroservicioVentas.DTO.VentasDTO;
import com.Conjunta.MicroservicioVentas.Model.Ventas;
import com.Conjunta.MicroservicioVentas.Repository.VentasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VentasServiceImpl implements VentasService {

    @Autowired
    private VentasRepository ventasRepository;

    @Override
    public Ventas crearVenta(VentasDTO ventasDTO) {
        Ventas venta = new Ventas();
        venta.setClienteId(ventasDTO.getClienteId());
        venta.setFechaVenta(ventasDTO.getFechaVenta());
        venta.setTotal(ventasDTO.getTotal());
        return ventasRepository.save(venta);
    }

    @Override
    public List<Ventas> obtenerTodasLasVentas() {
        return ventasRepository.findAll();
    }

    @Override
    public Ventas obtenerVentaPorId(Long id) {
        Optional<Ventas> venta = ventasRepository.findById(id);
        return venta.orElse(null);
    }

    @Override
    public Ventas actualizarVenta(Long id, VentasDTO ventasDTO) {
        Optional<Ventas> optionalVenta = ventasRepository.findById(id);
        if (optionalVenta.isPresent()) {
            Ventas venta = optionalVenta.get();
            venta.setClienteId(ventasDTO.getClienteId());
            venta.setFechaVenta(ventasDTO.getFechaVenta());
            venta.setTotal(ventasDTO.getTotal());
            return ventasRepository.save(venta);
        }
        return null;
    }

    @Override
    public boolean eliminarVenta(Long id) {
        if (ventasRepository.existsById(id)) {
            ventasRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
