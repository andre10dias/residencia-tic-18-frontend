import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaCarroComponent } from './detalha-carro.component';

describe('DetalhaCarroComponent', () => {
  let component: DetalhaCarroComponent;
  let fixture: ComponentFixture<DetalhaCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhaCarroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
