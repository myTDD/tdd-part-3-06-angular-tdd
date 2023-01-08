import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messageList = [];
  err_msg: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getMessages();
  }

  // getMessages() {
  //   this.messageList = this.messageService.getMessages();
  // }

  getMessages() {
    this.messageService.getMessages()
      .subscribe(messages => this.messageList = messages);
  }
}

