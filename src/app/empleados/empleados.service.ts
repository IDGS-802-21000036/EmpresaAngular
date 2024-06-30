import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: IEmpleado[] = [];

  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado): void {
    empleado.num = this._empleados[this._empleados.length - 1].num + 1 || 1;

    this._empleados.push(empleado);

    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(num: number): void {
    this._empleados = this._empleados.filter(empleado => empleado.num !== num);

    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }


  constructor() {
    const empleados = localStorage.getItem('empleados');

    if (empleados) {
      this._empleados = JSON.parse(empleados);
   }

  }
}
