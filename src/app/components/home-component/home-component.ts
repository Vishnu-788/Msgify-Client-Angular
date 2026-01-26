import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar-component/navbar-component';

@Component({
  selector: 'app-home-component',
    imports: [
        NavbarComponent
    ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}
