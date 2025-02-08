import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() articleTitle: string = '';
  @Input() articleResume: string = '';
  @Input() authorName: string = '';
  @Input() authorProfilePicture: string = '';
  @Input() publisedAt: string = '';
  @Input() imageArticle: string = '';
  @Input() category: string = '';
  @Input() readingTime: string = '';
  @Input() showDescription: boolean = true;
  @Input() isSmallCard: boolean = false;
  @Input() imagePosition: string = 'top';
  @Input() articleURL: string = '#';
  
  articleImgHeight: number = 250;
  parentElementWidth: number = this.elementRef.nativeElement.parentElement.offsetWidth;

  constructor(private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    if(this.isSmallCard) {
      this.articleImgHeight /= 2;
      this.showDescription = false;
    }

    if(this.imagePosition !== 'top' && this.imagePosition !== 'left' && this.imagePosition !== 'background') {
      this.imagePosition = 'top';
    }

    if (this.imagePosition === 'left' || this.imagePosition === 'background') {
      this.isSmallCard = false;
    }

    if (this.imagePosition === 'background') {
      if (this.parentElementWidth >= 700) {
        this.articleImgHeight = 500;
      } else {
        this.articleImgHeight = this.parentElementWidth;
      }
    }
  }

}
