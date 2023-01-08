import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageFormComponent } from './new-message-form.component';

describe('NewMessageFormComponent', () => {
  let component: NewMessageFormComponent;
  let fixture: ComponentFixture<NewMessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMessageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text box', () => {
    expect(fixture.nativeElement.querySelector('[data-test="text-box"]')).toBeTruthy();
  });

  it('should show submit button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="submit-button"]')).toBeTruthy();
  });
});
