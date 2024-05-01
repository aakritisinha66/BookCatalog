import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../service/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { titleValidator } from '../custom-validator/validator';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public fb: FormBuilder, private bookService: BookServiceService, private route: ActivatedRoute){
  }

  title= new FormControl('', [Validators.required, titleValidator])
  author= new FormControl('', [Validators.required])
  genre= new FormControl('', [Validators.required])
  description= new FormControl('', [Validators.required])

  bookForm: FormGroup = this.fb.group({
    title: this.title,
    author: this.author,
    genre: this.genre,
    description: this.description
  })

  ngOnInit() {
  }

  create(){
    if(this.bookForm.valid){
      console.log("Form Values: ", this.bookForm.value)
      this.bookService.addBook(this.bookForm.value).subscribe(()=>{
        console.log("POST Request")
      })
    }
  }
}
