import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireacceptComponent } from './formulaireaccept.component';

describe('FormulaireacceptComponent', () => {
  let component: FormulaireacceptComponent;
  let fixture: ComponentFixture<FormulaireacceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireacceptComponent]
    });
    fixture = TestBed.createComponent(FormulaireacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
