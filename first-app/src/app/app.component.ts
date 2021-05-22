import { Component } from '@angular/core';


export interface Cards {
  title: string,
  desc: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'first-app';




  cards: Cards[] = [
    {title: 'Fobus', desc:'Fobus - is my random letter'},
    {title: 'Globus', desc:'sdfhj sdff ewrp;,mzxmc lasd sdanma,snd'},
    {title: 'Bobus', desc:'Qasdkjhd asdir;9 alsnd,ad.lv;lxzckf'},
 ] 

/**/

  isContentVisible = true
  
  toggleContent() { 

      this.isContentVisible = !this.isContentVisible

  }
  
}
