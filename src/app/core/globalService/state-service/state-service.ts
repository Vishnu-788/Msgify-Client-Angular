import { Injectable } from '@angular/core';
import {AuthDto} from '../../models/AuthDto';
import {AuthSuccessDto} from '../../models/AuthSuccessDto';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private token: string|null = null;
  private username: string|null = null;

  setToken = (token: string) => {
    this.token = token;
  };
  setUsername = (username: string) => {
    this.username = username;
  }
}
