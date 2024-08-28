package com.Conjunta.MicroservicioClientes.Service;

import com.Conjunta.MicroservicioClientes.DTO.ClientesDTO;
import com.Conjunta.MicroservicioClientes.Model.Clientes;
import com.Conjunta.MicroservicioClientes.Repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientesServiceImpl implements ClientesService {

    @Autowired
    private ClientesRepository clientesRepository;

    @Override
    public Clientes crearCliente(ClientesDTO clienteDTO) {
        Clientes cliente = new Clientes();
        cliente.setNombre(clienteDTO.getNombre());
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setTelefono(clienteDTO.getTelefono());
        cliente.setDireccion(clienteDTO.getDireccion());
        cliente.setFechaNacimiento(clienteDTO.getFechaNacimiento());
        return clientesRepository.save(cliente);
    }

    @Override
    public List<Clientes> obtenerTodosLosClientes() {
        return clientesRepository.findAll();
    }

    @Override
    public Clientes obtenerClientePorId(Long id) {
        Optional<Clientes> cliente = clientesRepository.findById(id);
        return cliente.orElse(null);
    }

    @Override
    public Clientes actualizarCliente(Long id, ClientesDTO clienteDTO) {
        Optional<Clientes> optionalCliente = clientesRepository.findById(id);
        if (optionalCliente.isPresent()) {
            Clientes cliente = optionalCliente.get();
            cliente.setNombre(clienteDTO.getNombre());
            cliente.setEmail(clienteDTO.getEmail());
            cliente.setTelefono(clienteDTO.getTelefono());
            cliente.setDireccion(clienteDTO.getDireccion());
            cliente.setFechaNacimiento(clienteDTO.getFechaNacimiento());
            return clientesRepository.save(cliente);
        }
        return null;
    }

    @Override
    public boolean eliminarCliente(Long id) {
        if (clientesRepository.existsById(id)) {
            clientesRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
