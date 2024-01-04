import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeInputsComponent } from './scope-inputs.component';

describe('ScopeInputsComponent', () => {
  let component: ScopeInputsComponent;
  let fixture: ComponentFixture<ScopeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
