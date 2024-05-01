import { createReducer, on } from "@ngrx/store"
import { addToFavorites, addToFavoritesFailure, addToFavoritesSuccess, removeFromFavorites, removeFromFavoritesFailure, removeFromFavoritesSuccess } from "../action/favorite.action"
import { Book } from "src/app/interface/book.interface"

export interface BookState {
    books: Book[]
}

const initialState: BookState = {
    books: []
}

export const favoriteReducer = createReducer(initialState,
    on(addToFavorites, (state, { bookID }) => ({
        ...state,
        books: state.books.map(book => book.id == bookID ? { ...book, favorite: true } : book)
    })),
    on(removeFromFavorites, (state, { bookID }) => ({   //(state, { bookID }) same format as action ('[Favorite] Add to Favorite', props<{book: Book}>())
        ...state,
        books: state.books.map(book => book.id == bookID ? { ...book, favorite: false } : book)
    })),
    on(addToFavoritesSuccess, (state, { book }) => ({
        ...state,
        books: [...state.books, book]
    })),
    on(removeFromFavoritesSuccess, (state, { book }) => ({
        ...state,
        books: state.books.filter(favorite => favorite.id != book.id)
    })),
    on(addToFavoritesFailure, (state, { error }) => ({
        ...state,
        // Handle failure state if needed
    })),
    on(removeFromFavoritesFailure, (state, { error }) => ({
        ...state,
        // Handle failure state if needed
    }))
)