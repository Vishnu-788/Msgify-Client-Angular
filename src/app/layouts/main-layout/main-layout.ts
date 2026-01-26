import { Component } from '@angular/core';
import {HomeComponent} from '../../components/home-component/home-component';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../../components/navbar-component/navbar-component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
