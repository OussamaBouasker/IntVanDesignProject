import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixsecuriteComponent } from './choixsecurite.component';

describe('ChoixsecuriteComponent', () => {
  let component: ChoixsecuriteComponent;
  let fixture: ComponentFixture<ChoixsecuriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixsecuriteComponent]
    });
    fixture = TestBed.createComponent(ChoixsecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
