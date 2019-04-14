import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  isMyMessage(): boolean {
    if (this.message.Nickname === this.sessionService.getNickname()) {
      return true;
    }

    return false;
  }
}
