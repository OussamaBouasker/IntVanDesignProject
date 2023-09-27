import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemesProductionComponent } from './systemes-production.component';

describe('SystemesProductionComponent', () => {
  let component: SystemesProductionComponent;
  let fixture: ComponentFixture<SystemesProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemesProductionComponent]
    });
    fixture = TestBed.createComponent(SystemesProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
