package com.Conjunta.MicroservicioVentas.Repository;

import com.Conjunta.MicroservicioVentas.Model.Ventas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VentasRepository extends JpaRepository<Ventas, Long> {
}
