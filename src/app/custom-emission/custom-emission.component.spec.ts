import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEmissionComponent } from './custom-emission.component';

describe('CustomEmissionComponent', () => {
  let component: CustomEmissionComponent;
  let fixture: ComponentFixture<CustomEmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
