import { of } from 'rxjs';
import { Message } from 'src/app/models/message/message';

type messageListResponseType = Array<Message>;

// const dummyMessageListResponse: messageListResponseType = [];

const dummyMessageListResponse: messageListResponseType = [
  { userId: 1, id: 1, title: 'title 1', body: 'body 1' },
  { userId: 2, id: 2, title: 'title 2', body: 'body 2' },
  { userId: 3, id: 3, title: 'title 3', body: 'body 3' },
];

export class MessageServiceMock {
  // getMessages() {
  //   return dummyMessageListResponse;
  // }

  getMessages() {
    return of(dummyMessageListResponse);
  }
}
