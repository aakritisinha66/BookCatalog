import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../service/book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  constructor(public fb: FormBuilder, private bookService: BookServiceService, private route: ActivatedRoute){
  }

  @Output() signalChild = new EventEmitter<string>();
  @Output() successEvent = new EventEmitter<void>();
  @Input() selectedBook: any;
  
  book: any = {}

  title= new FormControl('')
  author= new FormControl('', [Validators.required])
  genre= new FormControl('', [Validators.required])
  description= new FormControl('', [Validators.required])

  bookForm: FormGroup = this.fb.group({
    title: this.title,
    author: this.author,
    genre: this.genre,
    description: this.description
  })

  ngOnChanges() {
    console.log(this.selectedBook)
    this.bookService.getBookById(this.selectedBook).subscribe((book: any)=>{
      console.log("Book Details in child component: ", book)
      this.book=book
      this.title.setValue(book.title)
      this.author.setValue(book.author)
      this.genre.setValue(book.genre)
      this.description.setValue(book.description)
    })
  }

  update(){
    if(this.bookForm.valid){
      console.log("Form Values: ", this.bookForm.value)
      this.bookService.updateBook(this.selectedBook, this.bookForm.value).subscribe(()=>{
        console.log("PUT Request")
        this.signalChild.emit(this.bookForm.value.title)
        this.successEvent.emit()
      })
    }
  }


}
