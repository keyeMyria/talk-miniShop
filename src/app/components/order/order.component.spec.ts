import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { OrderComponent } from './order.component';

describe('ConfirmationComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
