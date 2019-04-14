import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nickname: string;
  invalidNickname = false;
  @Output() nicknameSaved = new EventEmitter<boolean>();

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  enterNickname() {
    if (this.nickname == null || this.nickname.trim() === '') {
      this.invalidNickname = true;
      return;
    }

    this.sessionService.setNickname(this.nickname);
    this.nicknameSaved.emit(true);
  }
}
