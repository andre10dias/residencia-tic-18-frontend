import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaBarcoComponent } from './detalha-barco.component';

describe('DetalhaBarcoComponent', () => {
  let component: DetalhaBarcoComponent;
  let fixture: ComponentFixture<DetalhaBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhaBarcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhaBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
