import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ConfirmationComponent } from './confirmation.component';
import { StoreModule } from '@ngrx/store';
import { productDetailsReducer } from 'src/app/reducers/product-details.reducer';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationComponent ],
      imports: [StoreModule.forRoot({product: productDetailsReducer})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
