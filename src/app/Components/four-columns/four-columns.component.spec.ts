import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColumnsComponent } from './four-columns.component';

describe('FourColumnsComponent', () => {
  let component: FourColumnsComponent;
  let fixture: ComponentFixture<FourColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourColumnsComponent]
    });
    fixture = TestBed.createComponent(FourColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
