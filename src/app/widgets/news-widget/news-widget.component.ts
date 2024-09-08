import { Component } from '@angular/core';

@Component({
  selector: 'app-news-widget',
  standalone: true,
  imports: [],
  template: `<div class="widget">News Widget Content</div>`,
  styles: ['.widget { padding: 10px; border: 1px solid #ddd; margin-bottom: 10px; }']
})
export class NewsWidgetComponent {

}
