import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() bannerTitle:string = '';
  @Input() bannerContent:string = '';

}
