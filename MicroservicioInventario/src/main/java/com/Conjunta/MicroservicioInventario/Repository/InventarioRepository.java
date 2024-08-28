package com.Conjunta.MicroservicioInventario.Repository;

import com.Conjunta.MicroservicioInventario.Model.Inventario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventarioRepository extends JpaRepository<Inventario, Long> {
}
