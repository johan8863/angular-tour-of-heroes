import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heore-detail',
  templateUrl: './heore-detail.component.html',
  styleUrls: ['./heore-detail.component.css']
})
export class HeoreDetailComponent implements OnInit {
  @Input() hero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
