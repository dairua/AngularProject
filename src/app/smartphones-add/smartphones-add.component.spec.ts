import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesAddComponent } from './smartphones-add.component';

describe('SmartphonesAddComponent', () => {
  let component: SmartphonesAddComponent;
  let fixture: ComponentFixture<SmartphonesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphonesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphonesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
