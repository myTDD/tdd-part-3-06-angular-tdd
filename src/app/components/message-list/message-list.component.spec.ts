import { Message } from 'src/app/models/message/message';
//import { MessageServiceMock } from './message.service.mock';
import { MessageService } from 'src/app/services/message/message.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

type messageListResponseType = Array<Message>;

// const dummyMessageListResponse: messageListResponseType = [];

const dummyMessageListResponse: messageListResponseType = [
  { userId: 1, id: 1, title: 'title 1', body: 'body 1' },
  { userId: 2, id: 2, title: 'title 2', body: 'body 2' },
  { userId: 3, id: 3, title: 'title 3', body: 'body 3' },
];

// class MockedMessageService {
//   getMessages() {
//     return dummyMessageListResponse;
//   }
// }

describe('MessageListComponent getMessages() method', () => {
  //let messageService: MockedMessageService;
  //let messageService: MessageServiceMock;
  let messageService: MessageService;
  let messageList: any = [];
  let http: HttpClient;

  beforeEach(() => {
    //messageService = new MockedMessageService();
    //messageService = new MessageServiceMock();
    messageService = new MessageService(http);
  });

  // it('should have "messageList" populated from MockedMessageService', () => {
  //   messageList = messageService.getMessages();
  //   expect(messageList.length).toBeGreaterThan(0);
  // });

  // it('should have "messageList" populated from MessageServiceMock just as mocked data', () => {
  //   messageList = messageService.getMessages();
  //   expect(messageList.length).toBeGreaterThan(0);
  // });

  // it('should have "messageList" populated from MessageServiceMock through an observable through the http request', () => {
  //   messageService.getMessages()
  //     .subscribe(messages => messageList = messages);
  //   expect(messageList.length).toBeGreaterThan(0);
  // });

  it('should have "messageList" populated from MessageService through an observable of mocked data using a Spy', () => {
    spyOn(messageService, 'getMessages').and.returnValue(of(dummyMessageListResponse));
    //spyOn(messageService, 'getMessages').and.callThrough();
    messageService.getMessages()
      .subscribe(messages => messageList = messages);
    // expect(messageList.length).toBe(0);
    expect(messageList.length).toBeGreaterThan(0);
    expect(messageList.length).toBe(3);
  });
});
