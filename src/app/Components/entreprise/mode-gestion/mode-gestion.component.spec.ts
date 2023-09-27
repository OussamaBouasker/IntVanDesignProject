import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeGestionComponent } from './mode-gestion.component';

describe('ModeGestionComponent', () => {
  let component: ModeGestionComponent;
  let fixture: ComponentFixture<ModeGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeGestionComponent]
    });
    fixture = TestBed.createComponent(ModeGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
