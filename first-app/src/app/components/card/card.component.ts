import { Component, Input } from '@angular/core'
import { Cards } from '../../app.component'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {


    
    @Input() card:Cards
    @Input() index:number

    constructor() {         
        this.card = <Cards>{};
        this.index = 0;
     }


    title ='TItle cards'
    
    desc = 'Description card item'




    cardDetail = {
        id: 1,
        name: 'Item name',
        desc: 'My little test description'
    }


    getNotification(){
        return 'Warning notification'
    }   



/**/

    textColor = 'red'

/**/

    disabledLeftButton = false
    disabledRightButton = false

    onClickLeftButton(event:any) {
        this.disabledRightButton = !this.disabledRightButton        
        console.log(event)     
    }

    onClickRightButton(event:any) {
        this.disabledLeftButton = !this.disabledLeftButton        
        console.log(event)        
    }

/**/

    onChangeInput(event:any){
        console.log(event)
        this.card.title = event.target.value
    }

    onChangeRefInput( value: string ) {        
        this.card.title = value
    }


/**/
 
   date = new Date();


}