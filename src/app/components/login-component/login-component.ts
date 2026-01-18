import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^\w+$/)]),
      password: new FormControl('', [Validators.required])
    })
  }
  handleLogin(){
    if(this.loginForm.invalid){
      console.log("Error")
    } else {
      this.loginForm.reset();
    }
  }
}
