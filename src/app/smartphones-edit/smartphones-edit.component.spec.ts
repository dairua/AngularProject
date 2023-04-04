import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesEditComponent } from './smartphones-edit.component';

describe('SmartphonesEditComponent', () => {
  let component: SmartphonesEditComponent;
  let fixture: ComponentFixture<SmartphonesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphonesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphonesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
