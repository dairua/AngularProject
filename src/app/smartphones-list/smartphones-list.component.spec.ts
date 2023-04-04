import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesListComponent } from './smartphones-list.component';

describe('SmartphonesListComponent', () => {
  let component: SmartphonesListComponent;
  let fixture: ComponentFixture<SmartphonesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphonesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphonesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
