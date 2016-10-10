import { Component, ElementRef, Renderer, AfterViewInit, style, keyframes, animate} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log('in constructor: ' + (+new Date()));
    console.log(this.el.nativeElement);

  }

  ngAfterViewInit() {
    console.log('in ngAfterViewInit: ' + (+new Date()));
    console.log(this.el.nativeElement);
    this.renderer.setElementStyle(this.el.nativeElement, 'color', '#333bb7');
    this.renderer.animate(this.el.nativeElement, {
      styles: [{
        'opacity': 1,
        'transform': 'translateX(0)'
      }]
    }, [], 300, 100, 'ease-in-out');
  }

}
