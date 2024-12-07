import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FloatComponent } from '../float/float.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';

const routes: Routes = [
  { path: 'float', component: FloatComponent },
  { path:  'forms',component: FormsComponent}
  


];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BsDropdownModule,
    RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
