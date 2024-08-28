package com.Conjunta.MicroservicioVentas.Repository;

import com.Conjunta.MicroservicioVentas.Model.DetallesVenta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetallesVentaRepository extends JpaRepository<DetallesVenta, Long> {

    // Método para encontrar detalles de venta por ID de la venta
    List<DetallesVenta> findByVentaId(Long ventaId);
}
