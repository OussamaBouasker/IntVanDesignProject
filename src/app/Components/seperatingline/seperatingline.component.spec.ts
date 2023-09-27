import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperatinglineComponent } from './seperatingline.component';

describe('SeperatinglineComponent', () => {
  let component: SeperatinglineComponent;
  let fixture: ComponentFixture<SeperatinglineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeperatinglineComponent]
    });
    fixture = TestBed.createComponent(SeperatinglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
