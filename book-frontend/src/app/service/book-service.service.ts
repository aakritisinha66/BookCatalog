import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { Book } from '../interface/book.interface';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../store/selector/favorite.selector';
import { searchBooksSuccess } from '../store/action/searchBook.action';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(public http: HttpClient, private store: Store) { }

  favouriteBooks$: Observable<any> | undefined
  favouriteBooks: any

  ngOnInit() {
    this.favouriteBooks$ = this.store.select(selectFavorites)
    this.favouriteBooks$.subscribe((value: any)=>{
      this.favouriteBooks = value
    })
  }

  getAllBooks(): Observable<any> {
    // return this.http.get<any[]>('http://localhost:8082/api/books').pipe(
    //   map((book: any) => {
    //     return book
    //   })
    //   , catchError((error) => {
    //     console.log("Error: ", error)
    //     throw error
    //   })
    // )
    return this.http.get<any[]>('http://localhost:8082/api/books');
  }

  getBookById(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8082/api/books/${id}`)
  }

  addBook(book: any): Observable<any>{
    return this.http.post<any>('http://localhost:8082/api/books', book)
  }

  updateBook(id: any, book: any): Observable<any>{
    return this.http.put<any>(`http://localhost:8082/api/books/${id}`, book)
  }

  searchBook(query: string): Observable<any>{
    console.log("Service: ", query)
    return this.getAllBooks().pipe(
      map((book: any)=>{
        const filteredBook= book.filter((b: any)=> b.title.includes(query))
        console.log("Service: ", filteredBook)
        return filteredBook;
      }),
      catchError((error: any)=>{
        console.log("Error: ", error)
        throw error
      })
    )
  }

  addToFavorites(bookID: any): Observable<any>{
    // console.log("Service favorites: ")
    return this.getAllBooks().pipe(
      map((data: any) => {
        const book = data.find((book: any) => book.id === bookID)
        // console.log("Book found: ", book)
        if (book) {
          book.favorite = true; // Update favorite status
          const bookObject = { ...book }
          // console.log("Service Add: ", bookObject)
          return bookObject
        }
        else return null
      }),
      switchMap((bookObject): Observable<any> => {
        // console.log("Book Found: ", bookObject)
        if(bookObject){
          return this.updateBook(bookID, bookObject).pipe(
            map((book: any)=>{
              // console.log("Updating book: ", book)
              return book
            })
          )
        }
        else return of(null);
      })
    )
  }

  removeFromFavorites(bookID: any): Observable<any>{
    // console.log("Service favorites: ")
    return this.getAllBooks().pipe(
      map((data: any) => {
        const book = data.find((book: any) => book.id === bookID)
        // console.log("Book found: ", book)
        if (book) {
          book.favorite = false; // Update favorite status
          const bookObject = { ...book }
          // console.log("Service Remove: ", bookObject)
          return bookObject
        }
        else return null
      }),
      switchMap((bookObject): Observable<any> => {
        // console.log("Book Found: ", bookObject)
        if(bookObject){
          return this.updateBook(bookID, bookObject).pipe(
            map((book: any)=>{
              // console.log("Updating book: ", book)
              return book
            })
          )
        }
        else return of(null);
      })
    )
  }

}
