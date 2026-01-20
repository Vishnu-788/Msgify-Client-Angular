import { Injectable } from '@angular/core';
import {LoginDto} from '../../core/models/LoginDto';
import {AuthService} from '../../core/globalService/auth-service/auth-service';
import {AuthSuccessDto} from '../../core/models/AuthSuccessDto';
import {API_ENDPOINTS} from '../../core/constants/api-endpoints';
import {AuthResponseDto} from '../../core/models/AuthResponseDto';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }
  private async parseResponse(response: Response): Promise<AuthResponseDto> {
    try {
      const data = await response.json();
      if(response.ok){
        const userData: AuthSuccessDto = {
          token: data.token,
          username: data.username
        };
        this.authService.setGlobalUserState(userData)
        return {success: true, message: 'Login success.'};
      } else {
        console.warn("Error in the first layer.", data);
        return {success: false, message: data.errorMessage};
      }
    } catch (err) {
      console.error("Error in catch", err);
      return {success: false, message: 'Error parsing information'};
    }
  }
  performLogin = async (loginDto: LoginDto): Promise<AuthResponseDto> => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDto)
      });
      return this.parseResponse(response);
    } catch (err) {
      return {success: false, message: "Server error. Try again later."}
    }
  }
}
