import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { WeatherWidgetComponent } from '../widgets/weather-widget/weather-widget.component';
import { NewsWidgetComponent } from '../widgets/news-widget/news-widget.component';
import { StockWidgetComponent } from '../widgets/stock-widget/stock-widget.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class DashboardComponent {
  // Reference to the custom placeholder where components will be dynamically loaded
  @ViewChild('customPlaceholder', { read: ViewContainerRef, static: true }) customPlaceholder!: ViewContainerRef;

  widgetSelections = {
    weather: false,
    news: false,
    stock: false,
  };

  vcr = inject(ViewContainerRef);

  loadSelectedWidgets() {
    // Clear previously loaded widgets from the placeholder
    this.customPlaceholder.clear();

    // Load selected widgets dynamically into the placeholder
    if (this.widgetSelections.weather) {
      this.loadWidget(WeatherWidgetComponent);
    }
    if (this.widgetSelections.news) {
      this.loadWidget(NewsWidgetComponent);
    }
    if (this.widgetSelections.stock) {
      this.loadWidget(StockWidgetComponent);
    }
  }

  private loadWidget(component: any) {
    this.customPlaceholder.createComponent(component);
  }
}
