import { Injectable } from '@angular/core';
import { StateService } from '../state-service/state-service';
import { LocalStorageService } from '../localstorage-service/local-storage-service';
import {AuthSuccessDto} from '../../models/AuthSuccessDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private stateService: StateService;
  private localStorageService: LocalStorageService;
  constructor(stateService : StateService, localStorageService : LocalStorageService) {
    this.stateService = stateService;
    this.localStorageService = localStorageService;
  }
  private setLocalStorageData(userData: AuthSuccessDto){
    this.localStorageService.setItem('token', userData.token);
    this.localStorageService.setItem('username', userData.username);
  }

  setGlobalUserState(userData: AuthSuccessDto){
    this.stateService.setUsername(userData.username);
    this.stateService.setToken(userData.token);
    // After updating the state store the data in the browser localstorage.
    this.setLocalStorageData(userData);
  }
}
