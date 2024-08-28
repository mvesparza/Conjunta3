import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVentasComponent } from './nuevo-ventas.component';

describe('NuevoVentasComponent', () => {
  let component: NuevoVentasComponent;
  let fixture: ComponentFixture<NuevoVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoVentasComponent]
    });
    fixture = TestBed.createComponent(NuevoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
