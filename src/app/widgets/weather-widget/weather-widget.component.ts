import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [],
  template: `<div class="widget">Weather Widget Content</div>`,
  styles: ['.widget { padding: 10px; border: 1px solid #ddd; margin-bottom: 10px; }']
})
export class WeatherWidgetComponent {

}
