import { Component } from '@angular/core';
import { CarouselSlideComponent } from './components/carousel-slide/carousel-slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselSlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
