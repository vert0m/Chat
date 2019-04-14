import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { ChatService } from 'src/app/services/chat.service';
import { Message } from 'src/app/models/message';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  messageText: string;
  timeOffset: number;

  constructor(private chatService: ChatService, private sessioService: SessionService) {
    this.timeOffset = moment().utcOffset();
  }

  ngOnInit() {
    this.chatService.startConnection().catch(error => console.error(error));

    this.chatService.connection.on('OnConnected', messages => {
      // tslint:disable-next-line:max-line-length
      messages.forEach((msg: { text: string; nickname: string; date: Date; }) => this.messages.push(new Message(msg.text, msg.nickname, moment(msg.date).add(this.timeOffset, 'minute').toDate())));
      this.scrollToBottom(1500);
    });

    this.chatService.connection.on('ReceiveMessage', (nickname, message, date) => {
      this.messages.push(new Message(message, nickname, moment(date).local().toDate()));
      this.scrollToBottom(1000);
    });

    this.scrollToBottom(1800);
  }

  sendMessage() {
    if (this.messageText) {
      this.chatService.sendMessage(this.sessioService.getNickname(), this.messageText, new Date());
      this.scrollToBottom(1000);
    }

    this.messageText = '';
  }

  scrollToBottom(time: number): void {
    setTimeout(() => {
      document.getElementsByClassName('chat_area')[0].scrollTop = document.getElementsByClassName('chat_area')[0].scrollHeight;
    }, time);
  }
}
