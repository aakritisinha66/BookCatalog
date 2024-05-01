import { createAction, props } from "@ngrx/store";
import { Book } from "../../interface/book.interface";

export const searchBooks = createAction('[Book Search] Search Books', props<{ query: string }>());
export const searchBooksSuccess = createAction('[Book Search] Search Books Success', props<{books: Book[]}>())
export const searchBooksFailure = createAction('[Book Search] Search Books Failure', props<{error: any}>())
