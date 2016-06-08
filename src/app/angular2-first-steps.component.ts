import { Component } from '@angular/core';
import { MovimientoComponent } from './movimiento/movimiento.component'

@Component({
  moduleId: module.id,
  selector: 'angular2-first-steps-app',
  templateUrl: 'angular2-first-steps.component.html',
  styleUrls: ['angular2-first-steps.component.css'],
  directives:[MovimientoComponent]
})
export class Angular2FirstStepsAppComponent {
  title = 'angular2-first-steps works!';
}
