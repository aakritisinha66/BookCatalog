import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy{

  constructor(private notificationService: NotificationService){}

  message: string | undefined;
  subscription: Subscription | undefined;

  ngOnInit(): void {
      this.subscription = this.notificationService.notification.subscribe(message=>{
        this.message = message
        setTimeout(() => {
          this.message = ''
        }, 50000);
      })
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }


}
