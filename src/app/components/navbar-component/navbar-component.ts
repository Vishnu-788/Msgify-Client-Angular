import {Component, inject} from '@angular/core';
import {AuthService} from '../../core/globalService/auth-service/auth-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  protected profileLetter: string;
  private authService: AuthService = inject(AuthService);
  constructor(){
    let username = this.authService.getUsername();
    if(username){
      this.profileLetter = username[0];
    } else {
      this.profileLetter = "NA"
    }
  }
}
