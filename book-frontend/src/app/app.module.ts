import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HttpClientModule } from '@angular/common/http'
import { BookServiceService } from './service/book-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducer/searchBook.reducer';
import { BookEffects } from './store/effects/searchBooks.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    EditBookComponent,
    CapitalizePipe,
    HighlightDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ books: bookReducer }), // Registering the bookReducer
    EffectsModule.forRoot([BookEffects]), // Registering the BookEffects
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
