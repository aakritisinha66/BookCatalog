import { createReducer, on } from '@ngrx/store';
import { Book } from '../../interface/book.interface';
import { searchBooks, searchBooksFailure, searchBooksSuccess } from '../action/searchBook.action';

// Define the interface for the state
export interface BookState {
  books: Book[];
  loading: boolean;
  error: any;
}

// Define the initial state
export const initialState: BookState = {
  books: [],
  loading: false,
  error: null
};

// Define the reducer function
export const bookReducer = createReducer(
  initialState,
  on(searchBooks, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(searchBooksSuccess, (state, { books }) => ({
    ...state,
    books,
    loading: false,
    error: null
  })),
  on(searchBooksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);


