import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/httpservice.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class PublicPagesCatalogComponent implements OnInit {

  constructor(private HttpService:  HttpService) { }

  content: HTMLElement | string = "Empty";
  catalog: any[] | null = []

  ngOnInit(): void {
      this.HttpService.getPageContent("catalog").subscribe( (data:any) => {
        this.content = data.result;
        this.catalog = data.catalog;
      })
    }

}
