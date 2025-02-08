export interface Posts {
  id: number;
  authorName: string;
  authorProfilePicture: string;
  publisedAt: string;
  imageArticle: string;
  articleTitle: string;
  articleResume: string;
  category: string;
  readingTime: string;
  showDescription?: boolean;
  imagePosition?: 'top' | 'left' | 'background';
  isSmallCard?: boolean,
  section: 'highlight-article'| 'lastest-news' | 'must-read' | 'editors-pick' | 'business' | 'sport-news'
}