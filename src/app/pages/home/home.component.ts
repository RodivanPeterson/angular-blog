import { Component, OnInit, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { Posts } from 'src/app/data/dataFake.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  highlightArticle: Posts[] = [];
  lastestNews: Posts[] = [];
  mustRead: Posts[] = [];
  editorsPick: Posts[] = [];
  business: Posts[] = [];
  sportNews: Posts[] = [];
  businessNSportNewsMediumDevices: Posts[] = [];
  screenSize: number = screen.width;
  extraLargeDeviceWidth: number = 1200;
  isExtraLargeDevice: boolean = false;

  heroBannerContent = `Craft narratives ✍ that ignite <span class="highlight">inspiration</span> 💡, 
    <span class="highlight">knowledge</span> 📕, and <span class="highlight">entertainment</span> 🎬`;

  posts: Posts[] = dataFake;
  
  constructor(private elementRef: ElementRef) { }
  
  ngOnInit(): void {

    this.updateIsMobileDevice(screen.width);

    this.highlightArticle = this.posts.filter(
      (post) => post.section === 'highlight-article'
    );

    this.lastestNews = this.posts.filter(
      (post) => post.section === 'lastest-news'
    );
    
    this.mustRead = this.posts.filter(
      (post) => post.section === 'must-read'
    );
    
    this.editorsPick = this.posts.filter(
      (post) => post.section === 'editors-pick'
    );

    this.business = this.posts.filter(
      (post) => post.section === 'business'
    );

    this.sportNews = this.posts.filter(
      (post) => post.section === 'sport-news'
    );
    
    this.businessNSportNewsMediumDevices.push(this.business[0], this.business[1], this.sportNews[0], this.sportNews[1]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateIsMobileDevice(screen.width);
  }

  updateIsMobileDevice(width: number): void {
    this.isExtraLargeDevice = width >= this.extraLargeDeviceWidth;
  }
}