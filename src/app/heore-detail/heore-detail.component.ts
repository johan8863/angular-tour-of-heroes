import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heore-detail',
  templateUrl: './heore-detail.component.html',
  styleUrls: ['./heore-detail.component.css']
})
export class HeoreDetailComponent implements OnInit {
  hero: Hero | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack() {
    this.location.back()
  }

}
