import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/interface/book.interface";

export const addToFavorites = createAction('[Favorite] Add to Favorite', props<{bookID: string}>())
export const addToFavoritesSuccess = createAction('[Favorite] Add to Favorite Success', props<{book: Book}>())
export const addToFavoritesFailure = createAction('[Favorite] Add to Favorite Failure', props<{error: any}>())

export const removeFromFavorites = createAction('[Favorite] Remove from Favorite', props<{bookID: string}>())
export const removeFromFavoritesSuccess = createAction('[Favorite] Remove from Favorite Success', props<{book: Book}>())
export const removeFromFavoritesFailure = createAction('[Favorite] Remove from Favorite Failure', props<{error: any}>())