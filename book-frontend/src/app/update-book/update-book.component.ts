import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../service/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { titleValidator } from '../custom-validator/validator';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public fb: FormBuilder, private bookService: BookServiceService, private route: ActivatedRoute,
    private notificationService: NotificationService) {
  }

  title = new FormControl('', [Validators.required, titleValidator])
  author = new FormControl('', [Validators.required])
  genre = new FormControl('', [Validators.required])
  description = new FormControl('', [Validators.required])
  img = new FormControl('/assets/image/unavailable.jpg')
  avatar = new FormControl('/assets/image/unavailable.jpg')
  toggle = new FormControl(false)
  favorite = new FormControl(false)

  bookForm: FormGroup = this.fb.group({
    title: this.title,
    author: this.author,
    genre: this.genre,
    description: this.description,
    img: this.img,
    avatar: this.avatar,
    toggle: this.toggle,
    favorite: this.favorite
  })


  ngOnInit() {
  }

  create() {
    if (this.bookForm.valid) {
      console.log("Form Values: ", this.bookForm.value)
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        console.log("POST Request")
        // window.alert(`Book is added!`)
        // Add the book to the system
        // Trigger a notification for the new book
        this.notificationService.notify(`${this.bookForm.value.title} is added`);
      })
    }
  }
}
