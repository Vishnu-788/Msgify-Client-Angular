import { Injectable } from '@angular/core';
import {AuthResponseDto} from '../../core/models/AuthResponseDto';
import {AuthService} from '../../core/globalService/auth-service/auth-service';
import {API_ENDPOINTS} from '../../core/constants/api-endpoints';
import {SignupDto} from '../../core/models/AuthDto';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }
  private parseResponse = async(response: Response): Promise<AuthResponseDto> => {
    try {
      const data = await response.json();
      if(response.ok){
        this.authService.setGlobalUserState({
          username: data.username,
          token: data.token
        });
        return {success: true, message: "Successfully registered"};
      } else {
        return {success: false, message: data.errorMessage};
      }
    } catch (err) {
      return {success: false, message: "Internal Error. Will fix soon."}
    }
  }

  performSignUp = async(data: SignupDto): Promise<AuthResponseDto> => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return this.parseResponse(response);
    } catch(err) {
      console.error("Error. Server is down." , err);
      return {success: false, message: 'Server error, try again later.'};
    }
  }
}
