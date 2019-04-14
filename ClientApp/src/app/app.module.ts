import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChatService } from './services/chat.service';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [ChatService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
