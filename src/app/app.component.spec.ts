import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {
}

@Component({selector: 'app-new-message-form', template: ''})
class NewMessageFormStubComponent {
}

@Component({selector: 'app-message-list', template: ''})
class MessageListStubComponent {
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        NewMessageFormStubComponent,
        MessageListStubComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
