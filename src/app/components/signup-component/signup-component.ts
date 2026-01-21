import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {SignupService} from './signup-service';

@Component({
  selector: 'app-signup-component',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.scss',
})
export class SignupComponent {
  private signupService: SignupService = inject(SignupService);
  private router: Router = inject(Router);
  protected signupForm: FormGroup;
  protected error = signal<string | null>(null);

  constructor() {
    this.signupForm = new FormGroup({
      username: new FormControl('',
        [Validators.required, Validators.minLength(5), Validators.pattern(/^\w+$/)]
      ),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit = async () => {
    this.error.set(null);
    if(this.signupForm.valid) {
      const response = await this.signupService.performSignUp(this.signupForm.value);
      if(response.success){
        await this.router.navigateByUrl('/');
      } else {
        this.error.set(response.message);
      }
    }
  }
}
