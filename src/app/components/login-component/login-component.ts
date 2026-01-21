import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {LoginService} from './login-service';
import {AuthDto} from '../../core/models/AuthDto';


@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  protected loginForm: FormGroup;
  private loginService: LoginService;
  private router: Router;
  protected errorMessage = signal<string|null>(null);


  constructor(router: Router) {
    this.loginService = inject(LoginService);
    this.router = router;
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^\w+$/)]),
      password: new FormControl('', [Validators.required])
    })
  }

  async handleLogin(){
    if(this.loginForm.valid){ // Invalid state is handled in the UI.
      this.errorMessage.set(null)
      const data: AuthDto = this.loginForm.value;
      const result = await this.loginService.performLogin(data);
      if(result.success){
        await this.router.navigateByUrl('/');
      } else {
        console.warn("Warning from the component.", result.message);
        this.errorMessage.set(result.message);
      }
    }
  }
}
