package com.Conjunta.MicroservicioClientes.Repository;

import com.Conjunta.MicroservicioClientes.Model.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientesRepository extends JpaRepository<Clientes, Long> {
}
