import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  // 数据转换为自定义类型
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {

  // 修改 getHeroes 方法，在获取到英雄数组时发送一条消息。
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
}
  
// 修改这个构造函数，添加一个私有的 messageService 属性参数。 Angular 将会在创建 HeroService 时把 MessageService 的单例注入到这个属性中。(private:注册为私有属性)
  constructor(private messageService: MessageService) { }
}
