import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockWidgetComponent } from './stock-widget.component';

describe('StockWidgetComponent', () => {
  let component: StockWidgetComponent;
  let fixture: ComponentFixture<StockWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
