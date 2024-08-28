package com.Conjunta.MicroservicioClientes.Service;

import com.Conjunta.MicroservicioClientes.DTO.ClientesDTO;
import com.Conjunta.MicroservicioClientes.Model.Clientes;
import com.Conjunta.MicroservicioClientes.Model.Clientes;

import java.util.List;

public interface ClientesService {

    // Crear un nuevo cliente
    Clientes crearCliente(ClientesDTO clienteDTO);

    // Obtener todos los clientes
    List<Clientes> obtenerTodosLosClientes();

    // Obtener un cliente por su ID
    Clientes obtenerClientePorId(Long id);

    // Actualizar un cliente existente
    Clientes actualizarCliente(Long id, ClientesDTO clienteDTO);

    // Eliminar un cliente por su ID
    boolean eliminarCliente(Long id);
}
