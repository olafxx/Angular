import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/httpservice.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class PublicPagesInfoComponent implements OnInit {


  constructor(private HttpService:  HttpService) { }

  content: HTMLElement | string = this.HttpService.content;

  ngOnInit(): void {
      this.HttpService.getPageContent("info").subscribe( (data:any) => {
        this.content = data.result;
      })
    }

}
