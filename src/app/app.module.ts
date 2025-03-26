import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationDropdownComponent } from './components/header/notification-dropdown/notification-dropdown.component';
import { UserDropdownComponent } from './components/header/user-dropdown/user-dropdown.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HighlightArticleComponent } from './components/highlight-article/highlight-article.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { FeturedArticleComponent } from './components/fetured-article/fetured-article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { HorizontalStoryScrollListComponent } from './components/horizontal-story-scroll-list/horizontal-story-scroll-list.component';
import { UserStoryComponent } from './components/horizontal-story-scroll-list/user-story/user-story.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesSliderComponent } from './components/articles-slider/articles-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    HeroBannerComponent,
    HighlightArticleComponent,
    SectionHeaderComponent,
    FeturedArticleComponent,
    ArticleCardComponent,
    HorizontalStoryScrollListComponent,
    UserStoryComponent,
    SubscriptionFormComponent,
    FooterComponent,
    HomeComponent,
    ArticlesSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
