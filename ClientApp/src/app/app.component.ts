import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSaved = false;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    if (this.sessionService.getNickname()) {
      this.isSaved = true;
    }
  }

  nicknameSaved(isSaved: boolean) {
    this.isSaved = isSaved;
  }
}
