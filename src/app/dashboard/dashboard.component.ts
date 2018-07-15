import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  // 在任何其它生命周期钩子之前调用。可以用它来注入依赖项(注入依赖项)
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // 使用依赖项
  getHeroes(): void{
    this.heroService.getHeroes()
    // 格式化(返回指定的数组元素)
    .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
