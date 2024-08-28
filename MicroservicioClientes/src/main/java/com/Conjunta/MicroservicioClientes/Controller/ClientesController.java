package com.Conjunta.MicroservicioClientes.Controller;

import com.Conjunta.MicroservicioClientes.DTO.ClientesDTO;
import com.Conjunta.MicroservicioClientes.Model.Clientes;
import com.Conjunta.MicroservicioClientes.Service.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8083"})
public class ClientesController {

    @Autowired
    private ClientesService clientesService;

    // Crear un nuevo cliente
    @PostMapping
    public ResponseEntity<Clientes> crearCliente(@RequestBody ClientesDTO clienteDTO) {
        Clientes cliente = clientesService.crearCliente(clienteDTO);
        return ResponseEntity.ok(cliente);
    }

    // Obtener todos los clientes
    @GetMapping
    public ResponseEntity<List<Clientes>> obtenerTodosLosClientes() {
        List<Clientes> clientes = clientesService.obtenerTodosLosClientes();
        return ResponseEntity.ok(clientes);
    }

    // Obtener un cliente por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Clientes> obtenerClientePorId(@PathVariable Long id) {
        Clientes cliente = clientesService.obtenerClientePorId(id);
        if (cliente != null) {
            return ResponseEntity.ok(cliente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Actualizar un cliente existente
    @PutMapping("/{id}")
    public ResponseEntity<Clientes> actualizarCliente(@PathVariable Long id, @RequestBody ClientesDTO clienteDTO) {
        Clientes clienteActualizado = clientesService.actualizarCliente(id, clienteDTO);
        if (clienteActualizado != null) {
            return ResponseEntity.ok(clienteActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un cliente por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCliente(@PathVariable Long id) {
        if (clientesService.eliminarCliente(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
