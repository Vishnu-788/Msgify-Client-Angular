import { Injectable } from '@angular/core';
import { StateService } from '../state-service/state-service';
import { LocalStorageService } from '../localstorage-service/local-storage-service';
import {AuthSuccessDto} from '../../models/AuthSuccessDto';

@Injectable({
  providedIn: 'root',
})

// Use this class to interact with both localStorageService and stateService for auth related purpose.
export class AuthService {
  private stateService: StateService;
  private localStorageService: LocalStorageService;

  constructor(stateService : StateService, localStorageService : LocalStorageService) {
    this.stateService = stateService;
    this.localStorageService = localStorageService;

    // Check if the data is already present in the localStorage.

  }
  private setLocalStorageData = (userData: AuthSuccessDto)=> {
    this.localStorageService.setItem('token', userData.token);
    this.localStorageService.setItem('username', userData.username);
  }

  setGlobalUserState = (userData: AuthSuccessDto) => {
    this.stateService.setUsername(userData.username);
    this.stateService.setToken(userData.token);
    // After updating the state store the data in the browser localstorage.
    this.setLocalStorageData(userData);
  }

  removeGlobalUserState= ()=> {
    this.localStorageService.resetStorage();
    this.stateService.resetState();
  }

  public getUsername = () => {
    return this.stateService.getUsername();
  }

  public getToken = () => {
    return this.stateService.getToken();
  }

  public isAuthenticated = (): boolean => {
    return !!this.stateService.getToken(); // !null === true, !!null === false.
  }
}
