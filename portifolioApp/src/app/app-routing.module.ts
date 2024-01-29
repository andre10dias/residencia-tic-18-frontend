import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UescComponent } from './uesc/uesc.component';
import { JreaderComponent } from './jreader/jreader.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: 'uesc-app', component: UescComponent },
  { path: 'jreader', component: JreaderComponent },
  { path: 'wiki-app', component: WikiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
