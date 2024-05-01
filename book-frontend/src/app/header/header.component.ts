import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../store/selector/favorite.selector';
import { Observable, map } from 'rxjs';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  books: any;

  constructor(private store: Store, private bookService: BookServiceService) { }

  favouriteBooks$: Observable<any> | undefined
  favouriteBooks: any
  favourite$: any

  ngOnInit() {
    this.favouriteBooks$ = this.store.select(selectFavorites)
    this.favouriteBooks$.subscribe((value: any) => {
      this.favouriteBooks = value
    })
    this.favourite$ = this.getAllBooks().subscribe((f: any)=>{
    })
    // console.log(this.favourite$)
  }
  getAllBooks() {
    return this.bookService.getAllBooks().pipe(
      map(book=> book.filter((b:any) => b.favorite === true))
    )
  }
}
