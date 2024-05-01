import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { WishlistComponent } from './wishlist/wishlist.component';
// import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'book-detail/:id', component: BookDetailsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'update-book', component: UpdateBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  // {path: '**', component: PageNotFoundComponent}

  // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  // { path: 'book-details/:id', loadChildren: () => import('./book-details/book-details.module').then(m => m.BookDetailsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
