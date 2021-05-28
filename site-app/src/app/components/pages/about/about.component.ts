import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/httpservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[HttpService]
})
export class PublicPagesAboutComponent implements OnInit {
  
  constructor(private HttpService: HttpService) { }


  content: HTMLElement | string = "Empty";
  

  ngOnInit(): void {

     this.HttpService.getPageContent('about').subscribe((data:any)=>{    
      console.log(data);  
      this.content =  data.result;
     })
  }

}
