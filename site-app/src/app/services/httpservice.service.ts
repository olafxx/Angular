import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class HttpService {
   
    constructor(private http: HttpClient){ }

    content:string = "You need to start the server - https://github.com/olafxx/Angular/tree/main/site-app-server";
      
    getSum(num1: number, num2: number){
      return this.http.get('http://localhost:3000/sum?num1=' + num1 + "&num2=" + num2);
    }
 
    getPageContent(page: string){
      return this.http.get('http://localhost:3000/pages/' + page)      
      //.pipe(catchError(this.errorHandler))
    }

}

 