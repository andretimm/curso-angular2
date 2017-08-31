import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomComponent } from './diretivas-custom.component';

describe('DiretivasCustomComponent', () => {
  let component: DiretivasCustomComponent;
  let fixture: ComponentFixture<DiretivasCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
