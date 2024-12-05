import { Component } from '@angular/core';
import { FloatComponent } from '../float/float.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-paginaf',
  standalone: true,
  imports: [FloatComponent, HeaderComponent],
  templateUrl: './paginaf.component.html',
  styleUrl: './paginaf.component.css'
})
export class PaginafComponent {

}
