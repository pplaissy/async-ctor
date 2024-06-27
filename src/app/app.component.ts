import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppVM } from './app-vm';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AsyncElementComponent } from './async-element/async-element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ProgressSpinnerModule, AsyncElementComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  model: AppVM = new AppVM;
}
