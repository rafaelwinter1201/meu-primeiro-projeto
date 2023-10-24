import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeiretivasEstruturaisComponent } from './deiretivas-estruturais.component';

describe('DeiretivasEstruturaisComponent', () => {
  let component: DeiretivasEstruturaisComponent;
  let fixture: ComponentFixture<DeiretivasEstruturaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeiretivasEstruturaisComponent]
    });
    fixture = TestBed.createComponent(DeiretivasEstruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
