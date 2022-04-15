import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LefTnavComponent } from './lef-tnav.component';

describe('LefTnavComponent', () => {
  let component: LefTnavComponent;
  let fixture: ComponentFixture<LefTnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LefTnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LefTnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
