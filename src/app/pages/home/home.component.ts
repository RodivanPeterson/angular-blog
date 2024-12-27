import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroBannerContent = `Craft narratives ✍ that ignite <span class="highlight">inspiration</span> 💡, <span class="highlight">knowledge</span> 📕, and <span class="highlight">entertainment</span> 🎬`;

}
