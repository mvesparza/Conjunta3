import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProductosComponent } from './nuevo-productos.component';

describe('NuevoProductosComponent', () => {
  let component: NuevoProductosComponent;
  let fixture: ComponentFixture<NuevoProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoProductosComponent]
    });
    fixture = TestBed.createComponent(NuevoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
