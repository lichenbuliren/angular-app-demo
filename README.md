# AngularAppDemo

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
## 项目笔记
### app.module.ts
``` javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

```
### 输入属性，常用来父容器向子容器传值
``` html
<!-- 父容器 app.component.html -->
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```
``` javascript
<!-- 子容器，hero-detail.component.ts -->
import { Component, Input } from '@angular/core';

export class HeroDetailComponent implements {
  @Input()
  hero: Hero;
  
  constructor() { }
}
```

### 服务返回一个 Promise
```javascript
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}

<!-- 使用 -->
getHeroes(): void {
  this.heroSerivce.getHeroes().then(heroes => this.heroes = heroes);
}
```

### 路由配置
``` javascript
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
```
### 集成 bootstrap.css

首先安装 `bootstrap`
``` bash
npm install bootstrap
```

然后找到项目中的 `angular-cli.json` 配置文件。
``` json
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "styles.css"
]
```