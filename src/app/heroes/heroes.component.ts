import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HERO } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  
  heroes = HERO;

  // 把该组件的 hero 属性改名为 selectedHero，但不要为它赋值,
  // 它会把模板中被点击的英雄赋值给组件的 selectedHero 属性。Hero 已被改名为：selectedHero
  selectedHero: Hero;   //undefined

  constructor() { }

  ngOnInit() {
  }

  // 添加click事件:void 不返回;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
