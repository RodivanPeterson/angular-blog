import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }
  
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
  }

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
  
  articleImgHeight: number = 250;
}
