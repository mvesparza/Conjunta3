package com.Conjunta.API_gateway.Conjunta.MicroservicioGateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("ventas-service", r -> r
                        .path("/api/ventas/**", "/api/detalles-venta/**")
                        .uri("http://localhost:8082"))
                .route("clientes-service", r -> r
                        .path("/api/clientes/**")
                        .uri("http://localhost:8083"))
                .route("inventario-service", r -> r
                        .path("/api/inventario/**")
                        .uri("http://localhost:8084"))
                .build();
    }
}