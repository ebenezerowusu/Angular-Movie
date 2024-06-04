import { Component } from '@angular/core';
import { CarouselSlideComponent } from './components/carousel-slide/carousel-slide.component';
import { CardComponent } from '../../../shared/components/products/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselSlideComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
