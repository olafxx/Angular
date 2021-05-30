import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/httpservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class PrivatePagesAboutComponent implements OnInit {

  constructor(private HttpService:  HttpService) { }

  content: HTMLElement | string = "Empty";

  ngOnInit(): void {
      this.HttpService.getPageContent("private/about").subscribe( (data:any) => {
        this.content = data.result;
      })
    }


}
