import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente.component';
import { ListaProductosComponent } from './productos/lista-productos.component';
import { DetalleProductosComponent } from './productos/detalle-productos.component';
import { NuevoProductosComponent } from './productos/nuevo-productos.component';
import { EditarProductosComponent } from './productos/editar-productos.component';
import { ListaVentasComponent } from './ventas/lista-ventas.component';
import { NuevoVentasComponent } from './ventas/nuevo-ventas.component';
import { EditarVentasComponent } from './ventas/editar-ventas.component';
import { DetalleVentasComponent } from './ventas/detalle-ventas.component';


const routes: Routes = [
  {path: 'detalleventas/:id', component: DetalleVentasComponent},
  {path: 'listaventas', component: ListaVentasComponent},
  {path: 'nuevaventa', component: NuevoVentasComponent},
  {path: 'editarventa', component: EditarVentasComponent},
  {path: 'listaproductos', component: ListaProductosComponent},
  {path: 'detalleproducto/:id', component: DetalleProductosComponent},
  {path: 'nuevoproducto', component: NuevoProductosComponent},
  {path: 'editarproducto/:id', component: EditarProductosComponent},
  {path: 'lista', component: ListaClienteComponent},
  {path: 'detalle/:id', component: DetalleClienteComponent},
  {path: 'nuevo', component: NuevoClienteComponent},
  {path: 'editar/:id', component: EditarClienteComponent},
  {path: '*', redirectTo: '', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
