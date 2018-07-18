import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
// // 从 rxjs/operators 中导入 catchError 符号
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


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
  // this.messageService.add('HeroService: fetched heroes');
  // return of(HEROES);

  // 使用 RxJS 的 of() 函数来把模拟英雄数据返回为 Observable<Hero[]> 格式
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  
  // // 修改这个构造函数，添加一个私有的 messageService 属性参数。 Angular 将会在创建 HeroService 时把 MessageService 的单例注入到这个属性中。(private:注册为私有属性)
  // constructor(private messageService: MessageService) { }
  constructor (
    private http: HttpClient,
    private messageService: MessageService,
  ){}

  // 获取英雄后发送消息
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string){
    this.messageService.add("heroes" + message);
  }

  // 把服务器上英雄数据资源的访问地址定义为 heroesURL。
  private heroesUrl = 'api/heroes';

  
}


  
