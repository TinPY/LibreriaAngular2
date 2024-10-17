import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndecLoginSsoComponent } from './undec-login-sso.component';

describe('UndecLoginSsoComponent', () => {
  let component: UndecLoginSsoComponent;
  let fixture: ComponentFixture<UndecLoginSsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndecLoginSsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndecLoginSsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
