import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../reducer/searchBook.reducer';

// Create a feature selector to select the search book state
export const selectBookState = createFeatureSelector<BookState>('books');

// Create a selector to select the list of books
export const selectBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);

// Create a selector to select the loading status
export const selectLoading = createSelector(
  selectBookState,
  (state: BookState) => state.loading
);

// Create a selector to select the error state
export const selectError = createSelector(
  selectBookState,
  (state: BookState) => state.error
);

