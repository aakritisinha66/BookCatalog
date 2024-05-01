import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { BookServiceService } from "src/app/service/book-service.service";
import { addToFavorites, addToFavoritesFailure, addToFavoritesSuccess, removeFromFavorites, removeFromFavoritesFailure, removeFromFavoritesSuccess } from "../action/favorite.action";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class FavoriteEffects {
    constructor(private actions: Actions, private bookService: BookServiceService) { }

    addToFavorites = createEffect(() =>
        this.actions.pipe(
            ofType(addToFavorites),
            switchMap(({ bookID }) =>
                this.bookService.addToFavorites(bookID).pipe(
                    map((book => addToFavoritesSuccess({book}))),
                    catchError(error => of(addToFavoritesFailure({ error })))
                )
            )
        ))
    RemoveFromFavorites = createEffect(() =>
        this.actions.pipe(
            ofType(removeFromFavorites),
            switchMap(({ bookID }) =>
                this.bookService.removeFromFavorites(bookID).pipe(
                    map((book => removeFromFavoritesSuccess({book}))),
                    catchError(error => of(removeFromFavoritesFailure({ error })))
                )
            )
        ))
}