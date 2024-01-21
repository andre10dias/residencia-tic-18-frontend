import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaAviaoComponent } from './detalha-aviao.component';

describe('DetalhaAviaoComponent', () => {
  let component: DetalhaAviaoComponent;
  let fixture: ComponentFixture<DetalhaAviaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhaAviaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhaAviaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
