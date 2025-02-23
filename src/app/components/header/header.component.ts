import { Component } from '@angular/core';

import { FloatComponent } from '../float/float.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from '../../pages/forms/forms.component';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

const routes: Routes = [
  { path: 'float', component: FloatComponent },
  { path:  'forms',component: FormsComponent}
  


];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BsDropdownModule,
    RouterModule, NgOptimizedImage, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
