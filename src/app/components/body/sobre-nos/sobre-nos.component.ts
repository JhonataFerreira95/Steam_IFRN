import { Component, Input } from '@angular/core';
import { ImageCard } from '../../../models/img-card';

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [],
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'] 
})
export class SobreNosComponent {
  
  @Input({ required: true }) img_card!: ImageCard;

  constructor() {} 

}
