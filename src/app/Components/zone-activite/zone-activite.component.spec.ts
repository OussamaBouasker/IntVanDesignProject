import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneActiviteComponent } from './zone-activite.component';

describe('ZoneActiviteComponent', () => {
  let component: ZoneActiviteComponent;
  let fixture: ComponentFixture<ZoneActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneActiviteComponent]
    });
    fixture = TestBed.createComponent(ZoneActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
