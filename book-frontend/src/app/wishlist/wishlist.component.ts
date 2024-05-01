import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';
import { Observable } from 'rxjs';
import { Book } from '../interface/book.interface';
import { Store } from '@ngrx/store';
import { searchBooks } from '../store/action/searchBook.action';
import { removeFromFavorites } from '../store/action/favorite.action';
import { selectFavorites } from '../store/selector/favorite.selector';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public bookService: BookServiceService, private store: Store, private cdr: ChangeDetectorRef) { }

  favoriteBooks$: Observable<Book[]> | undefined;
  books: any;

  ngOnInit() {
    this.favoriteBooks$ = this.store.select(selectFavorites)
    this.getAllBooks()
  }
  selectedBookID: any;
  signalParent = "";

  onSearch(searchQuery: any): void {
    console.log("Search query: ", searchQuery)
    this.store.dispatch(searchBooks({ query: searchQuery }));
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data: any) => {
      // console.log("Fetched: ", data);
      this.books = data.filter((book: any) => book.favorite === true)
    });
  }

  removeFromFavorites(bookID: string) {
    console.log("Remove from favorite: ", bookID)
    this.store.dispatch(removeFromFavorites({bookID}))
    
    this.favoriteBooks$?.subscribe(favoriteBook => {
      this.getAllBooks()
      this.cdr.detectChanges(); // Call detectChanges after dispatching the action to update this.books
      console.log("Favourite books: ", favoriteBook);
    });
  }

  // ngOnDestroy() {
  //   this.time.unsubscribe();
  // }
}
