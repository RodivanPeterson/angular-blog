import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Posts } from 'src/app/data/dataFake.interface';

@Component({
  selector: 'app-articles-slider',
  templateUrl: './articles-slider.component.html',
  styleUrls: ['./articles-slider.component.css']
})
export class ArticlesSliderComponent implements OnInit {

  @Input() articlesContent: Posts[] = [];
  @Input() showDescription: boolean = true;
  @Input() isSmallCard: boolean = false;
  visiblePosts: Posts[] = [];
  cardWidth: number = 250;
  isSlider: boolean = false;
  parentElementWidth: number = this.elementRef.nativeElement.parentElement.offsetWidth;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.updateParentElementWidth();
    this.updateLayout(this.parentElementWidth);
    this.updateVisiblePosts(this.parentElementWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateParentElementWidth();
    this.updateLayout(this.parentElementWidth);
    this.updateVisiblePosts(this.parentElementWidth);
  }

  updateParentElementWidth(): void {
    this.parentElementWidth = this.elementRef.nativeElement.parentElement.offsetWidth;
  }

  updateLayout(width: number): void {
    this.isSlider = width <= 500;
  }

  updateVisiblePosts(width: number): void {
    if (this.isSlider) {
      this.visiblePosts = this.articlesContent;
    } else {
      const screenWidth = width;
      const postsPerRow = Math.floor(screenWidth / this.cardWidth);
      this.visiblePosts = this.articlesContent.slice(0, postsPerRow);
    }
  }
}
