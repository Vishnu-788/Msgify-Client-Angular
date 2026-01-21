import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private token: string|null = null;
  private username: string|null = null;

  // Setters.
  setToken = (token: string) => {
    this.token = token;
  };
  setUsername = (username: string) => {
    this.username = username;
  }

  // Getters
  getToken = () => {
    return this.token;
  }

  getUsername = () => {
    return this.username;
  }

  resetState = () => {
    this.token = null;
    this.username = null;
  }
}
