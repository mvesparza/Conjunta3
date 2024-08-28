package com.Conjunta.MicroservicioVentas.Service;

import com.Conjunta.MicroservicioVentas.DTO.DetallesVentaDTO;
import com.Conjunta.MicroservicioVentas.Model.DetallesVenta;
import com.Conjunta.MicroservicioVentas.Repository.DetallesVentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetallesVentaServiceImpl implements DetallesVentaService {

    @Autowired
    private DetallesVentaRepository detallesVentaRepository;

    @Override
    public DetallesVenta crearDetalleVenta(DetallesVentaDTO detallesVentaDTO) {
        DetallesVenta detalle = new DetallesVenta();
        detalle.setVentaId(detallesVentaDTO.getVentaId());
        detalle.setProductoId(detallesVentaDTO.getProductoId());
        detalle.setCantidad(detallesVentaDTO.getCantidad());
        detalle.setPrecioUnitario(detallesVentaDTO.getPrecioUnitario());
        detalle.setSubtotal(detallesVentaDTO.getSubtotal());
        return detallesVentaRepository.save(detalle);
    }

    @Override
    public List<DetallesVenta> obtenerTodosLosDetalles() {
        return detallesVentaRepository.findAll();
    }

    @Override
    public DetallesVenta obtenerDetalleVentaPorId(Long id) {
        Optional<DetallesVenta> detalle = detallesVentaRepository.findById(id);
        return detalle.orElse(null);
    }

    @Override
    public DetallesVenta actualizarDetalleVenta(Long id, DetallesVentaDTO detallesVentaDTO) {
        Optional<DetallesVenta> optionalDetalle = detallesVentaRepository.findById(id);
        if (optionalDetalle.isPresent()) {
            DetallesVenta detalle = optionalDetalle.get();
            detalle.setVentaId(detallesVentaDTO.getVentaId());
            detalle.setProductoId(detallesVentaDTO.getProductoId());
            detalle.setCantidad(detallesVentaDTO.getCantidad());
            detalle.setPrecioUnitario(detallesVentaDTO.getPrecioUnitario());
            detalle.setSubtotal(detallesVentaDTO.getSubtotal());
            return detallesVentaRepository.save(detalle);
        }
        return null;
    }

    @Override
    public boolean eliminarDetalleVenta(Long id) {
        if (detallesVentaRepository.existsById(id)) {
            detallesVentaRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<DetallesVenta> obtenerDetallesPorVentaId(Long ventaId) {
        return detallesVentaRepository.findByVentaId(ventaId);
    }
}
