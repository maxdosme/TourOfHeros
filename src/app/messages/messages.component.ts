import { Component, OnInit } from '@angular/core';
// 引入MessageService
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //   Angular将会在创建 MessagesComponent 的实例时 把 MessageService 的实例注入到这个属性中。(public注册为公共属性)
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
