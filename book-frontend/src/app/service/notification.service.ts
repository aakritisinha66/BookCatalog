import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../interface/book.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notification = new Subject<string>();

  notify(message: string){
    this.notification.next(message);
  }
}
