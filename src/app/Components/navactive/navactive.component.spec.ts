import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavactiveComponent } from './navactive.component';

describe('NavactiveComponent', () => {
  let component: NavactiveComponent;
  let fixture: ComponentFixture<NavactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavactiveComponent]
    });
    fixture = TestBed.createComponent(NavactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
