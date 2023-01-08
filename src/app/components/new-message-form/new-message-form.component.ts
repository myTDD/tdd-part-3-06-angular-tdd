import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.css']
})
export class NewMessageFormComponent implements OnInit {

  messageForm = new FormGroup({
    message: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //console.warn('Your message has been submitted', this.messageForm.value);
    //this.messageForm.reset();
  }
}
