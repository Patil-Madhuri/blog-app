import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'blogs'},
  {path: 'blogs',  component: ArticleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
