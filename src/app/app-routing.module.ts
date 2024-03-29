import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCDComponent } from './sous_composants/list-cd/list-cd.component';
import { CDComponent } from './sous_composants/cd/cd.component';
import { NewCDComponent } from './new-cd/new-cd.component';

const routes: Routes = [
  {
    path: '',
  component: HomeComponent
  },
  {
    path: 'catalog',
    component: ListCDComponent
  },
  {
    path: 'cd/:id',
    component: CDComponent
  },
  {
    path: 'add',
    component: NewCDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
