import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-fetured-article',
  templateUrl: './fetured-article.component.html',
  styleUrls: ['./fetured-article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeturedArticleComponent implements OnInit {

  @Input() articleTitle: string = '';
  @Input() articleResume: string = '';
  @Input() authorName: string = '';
  @Input() authorProfilePicture: string = '';
  @Input() publisedAt: string = '';
  @Input() imageArticle: string = '';
  @Input() category: string = '';
  @Input() readingTime: string = '';
  @Input() articleURL: string = '#';
  showDescription: boolean = true;
  isSmallCard: boolean = false;
  imagePosition: string = 'left';

  constructor() { }

  ngOnInit(): void {
  }

}
