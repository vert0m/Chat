import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as SignalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public connection: SignalR.HubConnection;

  constructor() {
  }

  startConnection() {
    this.connection = new SignalR.HubConnectionBuilder()
      .withUrl(environment.chatUrl)
      .build();

    return this.connection.start();
  }

  sendMessage(username: string, message: string, date: Date) {
    this.connection.send('SendMessage', username, message, date);
  }

  closeConnection() {
     this.connection.stop();
  }

}
