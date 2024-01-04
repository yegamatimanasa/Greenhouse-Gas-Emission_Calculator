import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetuserComponent } from './forgetuser.component';

describe('ForgetuserComponent', () => {
  let component: ForgetuserComponent;
  let fixture: ComponentFixture<ForgetuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
