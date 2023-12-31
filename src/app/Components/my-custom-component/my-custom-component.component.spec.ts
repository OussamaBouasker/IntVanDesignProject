import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomComponentComponent } from './my-custom-component.component';

describe('MyCustomComponentComponent', () => {
  let component: MyCustomComponentComponent;
  let fixture: ComponentFixture<MyCustomComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomComponentComponent]
    });
    fixture = TestBed.createComponent(MyCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
