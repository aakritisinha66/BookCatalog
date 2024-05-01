import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookServiceService){  }

  id: any;
  book: any;

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    console.log("Fetched id from url: ", this.id)
    this.id && this.getBookById(this.id)
  }

  getBookById(id: any){
    this.bookService.getBookById(id).subscribe((book: any)=>{
      console.log(book)
      this.book= book
    })
  }

  goBackToHome(){
    this.router.navigate(['/home'])
    // console.log(this.router.url); //to get current route
  }

}
