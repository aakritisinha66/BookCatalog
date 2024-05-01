import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';
import { Observable, map, of, switchMap } from 'rxjs';
import { Book } from '../interface/book.interface';
import { Store } from '@ngrx/store';
import { searchBooks } from '../store/action/searchBook.action';
import { selectBooks, selectError, selectLoading } from '../store/selector/searchBook.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public bookService: BookServiceService, private store: Store) { }

  filteredBooks: Observable<Book[]> | undefined;
  loading: Observable<boolean> | undefined;
  error: Observable<any> | undefined;

  books: any;

  ngOnInit() {
    this.filteredBooks = this.store.select(selectBooks);
    this.loading = this.store.select(selectLoading);
    this.error = this.store.select(selectError);
    this.getAllBooks()
  }
  selectedBookID: any;
  signalParent = "";

  onSearch(searchQuery: any): void {
    console.log("Search query: ", searchQuery)
    this.store.dispatch(searchBooks({ query: searchQuery }));
    this.filteredBooks?.subscribe(filteredBooks => {
      console.log("Filtered books: ", filteredBooks);
    });
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data: any) => {
      console.log("Fetched: ", data);
      this.books = data
    });
  }

  checkToggle(id: any) {
    return this.bookService.getAllBooks().pipe(
      map((data: any) => {
        const book = data.find((book: any) => book.id === id)
        console.log("Book found: ", book)
        if (book) {
          book.toggle = !book.toggle
          const bookObject = { ...book }
          return bookObject
        }
        else return null
      }),
      switchMap((bookObject: any) => {
        console.log("Switch Map: ", bookObject)
        if (bookObject) {
          return this.bookService.updateBook(id, bookObject).pipe(
            map(() => {
              console.log("Toggle: ", bookObject.toggle)
              return bookObject.toggle
            })
          )
        }
        else return of(false)
      })

    )
  }

  selectBook(id: any): void {
    this.checkToggle(id).subscribe((toggle: boolean) => {
      console.log("Toggle: ", toggle)
      if (toggle) {
        this.selectedBookID = id;
      }
      else {
        this.selectedBookID = ""
      }
    })
  }

  getSignal(signalFromChild: string) {
    console.log("This is parent fetching from child: ", signalFromChild)
    this.signalParent = signalFromChild
  }

  showPopup() {
    window.alert(`${this.signalParent} is updated!`)
  }

  // ngOnDestroy() {
  //   this.time.unsubscribe();
  // }
}
