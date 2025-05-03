import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTheaterComponent } from './select-theater.component';

describe('SelectTheaterComponent', () => {
  let component: SelectTheaterComponent;
  let fixture: ComponentFixture<SelectTheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTheaterComponent]
    });
    fixture = TestBed.createComponent(SelectTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
