import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})
export class ListadoEmpleadosComponent {

  constructor(private empleadosService: EmpleadosService) {}

  get empleados(): IEmpleado[]{
    return this.empleadosService.empleados;
  }

  eliminarEmpleado(num: number): void {
    this.empleadosService.eliminarEmpleado(num);
  }

}
