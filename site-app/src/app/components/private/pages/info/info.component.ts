import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/httpservice.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class PrivatePagesInfoComponent implements OnInit {

  constructor(private HttpService:  HttpService) { }

  content: HTMLElement | string = "Empty";

  ngOnInit(): void {
      this.HttpService.getPageContent("private/info").subscribe( (data:any) => {
        this.content = data.result;
      })
    }


}
