import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', {static: false}) carousel: any;

  constructor() { }

  ngOnInit(): void {
  }
  next() {
    this.carousel.nextSlide();
  }
  prev() {
    this.carousel.previousSlide();
  }

}
