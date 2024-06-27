import { Component, Input } from '@angular/core';
import { AsyncElementVM } from './async-element-vm';

@Component({
  selector: 'app-async-element',
  standalone: true,
  imports: [],
  templateUrl: './async-element.component.html'
})
export class AsyncElementComponent {
  @Input() model: AsyncElementVM | undefined;
}
