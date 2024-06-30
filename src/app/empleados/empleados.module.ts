import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    ListadoEmpleadosComponent,
    AgregarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginaInicioComponent,
    ListadoEmpleadosComponent,
    AgregarEmpleadoComponent
  ]

})
export class EmpleadosModule { }
