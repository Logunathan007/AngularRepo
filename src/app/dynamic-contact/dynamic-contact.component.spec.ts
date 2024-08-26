import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContactComponent } from './dynamic-contact.component';

describe('DynamicContactComponent', () => {
  let component: DynamicContactComponent;
  let fixture: ComponentFixture<DynamicContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
