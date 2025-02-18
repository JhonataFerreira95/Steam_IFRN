import { Component } from '@angular/core';
import { SobreNosComponent } from '../body/sobre-nos/sobre-nos.component';
import { IMG_CARD } from '../../../db-data';
import { ImageCard } from '../../models/img-card';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SobreNosComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  imgCards: ImageCard[] = [...IMG_CARD];
}
