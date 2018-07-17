import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// 引入路由组件
import { RouterModule, Routes } from '@angular/router';
// 引入路由跳转component
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// 定义路由表
  const routes: Routes = [
    {
      // 匹配路径
      path: 'heroes',
      // 创建模板
      component: HeroesComponent
    },
    // 默认路由
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    // dashboard组件
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    // 英雄详情视图
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    }
  ];  

@NgModule({
  // exports那些导入了本模块的模块所能看到的组件、指令和管道的列表
  exports: [ 
    RouterModule 
  ],
  imports: [ 
    // 把 RouterModule 添加到 @NgModule.imports 数组中，并用 routes 来配置它。你只要调用 imports 数组中的 RouterModule.forRoot()
    // forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
