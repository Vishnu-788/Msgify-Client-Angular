import { Component } from '@angular/core';
import {ProfileHeaderComponent} from '../profile-header-component/profile-header-component';

@Component({
  selector: 'app-profile-component',
  imports: [ProfileHeaderComponent],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.scss',
})
export class ProfileComponent {

}
