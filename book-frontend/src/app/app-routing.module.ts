import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book-detail/:id', component: BookDetailsComponent},
  {path: 'update-book', component: UpdateBookComponent},
  {path: 'edit-book/:id', component: EditBookComponent}
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
