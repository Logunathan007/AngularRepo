import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongRouterComponent } from './wrong-router.component';

describe('WrongRouterComponent', () => {
  let component: WrongRouterComponent;
  let fixture: ComponentFixture<WrongRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrongRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrongRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
