import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setNickname(nickname: string) {
    sessionStorage.setItem('nickname', nickname);
  }

  getNickname() {
    return sessionStorage.getItem('nickname');
  }

  clear() {
    sessionStorage.clear();
  }
}
