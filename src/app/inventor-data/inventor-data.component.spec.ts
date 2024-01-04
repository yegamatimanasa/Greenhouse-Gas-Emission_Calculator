import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorDataComponent } from './inventor-data.component';

describe('InventorDataComponent', () => {
  let component: InventorDataComponent;
  let fixture: ComponentFixture<InventorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
