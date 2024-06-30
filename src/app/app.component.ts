import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompartidoModule } from './compartido/compartido.module';
import { EmpleadosModule } from './empleados/empleados.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompartidoModule, EmpleadosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmpresaAngular';
}
