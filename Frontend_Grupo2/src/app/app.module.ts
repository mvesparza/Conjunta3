import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente.component';
import { ListaProductosComponent } from './productos/lista-productos.component';
import { NuevoProductosComponent } from './productos/nuevo-productos.component';
import { EditarProductosComponent } from './productos/editar-productos.component';
import { DetalleProductosComponent } from './productos/detalle-productos.component';
import { ListaVentasComponent } from './ventas/lista-ventas.component';
import { NuevoVentasComponent } from './ventas/nuevo-ventas.component';
import { EditarVentasComponent } from './ventas/editar-ventas.component';
import { DetalleVentasComponent } from './ventas/detalle-ventas.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    DetalleClienteComponent,
    NuevoClienteComponent,
    EditarClienteComponent,
    ListaProductosComponent,
    NuevoProductosComponent,
    EditarProductosComponent,
    DetalleProductosComponent,
    ListaVentasComponent,
    NuevoVentasComponent,
    EditarVentasComponent,
    DetalleVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
