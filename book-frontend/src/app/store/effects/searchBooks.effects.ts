import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookServiceService } from "../../service/book-service.service";
import { searchBooks, searchBooksFailure, searchBooksSuccess } from "../action/searchBook.action";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private bookService: BookServiceService) { }

  // Effect to handle the searchBooks action
  searchBooks = createEffect(() =>
    this.actions.pipe(
      ofType(searchBooks),
      switchMap(({ query }) =>
        this.bookService.searchBook(query).pipe(
          map(books => searchBooksSuccess({ books })),
          catchError(error => of(searchBooksFailure({ error })))
        )
      )
    )
  );
}