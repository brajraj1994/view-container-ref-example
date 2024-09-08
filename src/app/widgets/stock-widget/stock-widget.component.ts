import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-widget',
  standalone: true,
  imports: [],
  template: `<div class="widget">Stock Ticker Widget Content</div>`,
  styles: ['.widget { padding: 10px; border: 1px solid #ddd; margin-bottom: 10px; }']
})
export class StockWidgetComponent {

}
