import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponentComponent } from './meu-component.component';

describe('MeuComponentComponent', () => {
  let component: MeuComponentComponent;
  let fixture: ComponentFixture<MeuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
