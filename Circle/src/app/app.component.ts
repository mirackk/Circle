import { Component } from '@angular/core';
import { WebVitalsService } from './web-vitals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private webVitalsService: WebVitalsService) { }
  title = 'Circle';
}
