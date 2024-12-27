import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() sectionName: string = '';
  @Input() hideButtonLabel: boolean = false;

}
