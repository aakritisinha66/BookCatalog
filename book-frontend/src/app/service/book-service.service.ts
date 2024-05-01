import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(public http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/books').pipe(
      map((book: any) => {
        return book
      })
      , catchError((error) => {
        console.log("Error: ", error)
        throw error
      })
    )
  }

  getBookById(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/books/${id}`)
  }

  addBook(book: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/books', book)
  }

  updateBook(id: any, book: any): Observable<any>{
    return this.http.put<any>(`http://localhost:3000/books/${id}`, book)
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
}
