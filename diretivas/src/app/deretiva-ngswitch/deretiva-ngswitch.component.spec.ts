import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeretivaNgswitchComponent } from './deretiva-ngswitch.component';

describe('DeretivaNgswitchComponent', () => {
  let component: DeretivaNgswitchComponent;
  let fixture: ComponentFixture<DeretivaNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeretivaNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeretivaNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
