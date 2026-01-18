import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';

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
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      username: new FormControl('',
        [Validators.required, Validators.minLength(5), Validators.pattern(/^\w+$/)]
      ),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit = () => {
    if(this.signupForm.invalid){
      console.log("Invalid form.")
    } else {
      this.signupForm.reset();
    }
  }

}
