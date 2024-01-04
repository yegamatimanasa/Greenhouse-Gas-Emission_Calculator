import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetusernameComponent } from './resetusername.component';

describe('ResetusernameComponent', () => {
  let component: ResetusernameComponent;
  let fixture: ComponentFixture<ResetusernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetusernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
