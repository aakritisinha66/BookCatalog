import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../reducer/favorite.reducer';

export const selectFavoriteState = createFeatureSelector<BookState>('favorite');

export const selectFavorites = createSelector(
  selectFavoriteState,
  (state: BookState) => state.books
);
