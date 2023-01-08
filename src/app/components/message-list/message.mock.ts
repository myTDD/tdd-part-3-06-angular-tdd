import { Message } from "src/app/models/message/message";

export class MessageMock extends Message {
  override userId = 1;
  override id = 1;
  override title = "title 1";
  override body = "body 1";
}
