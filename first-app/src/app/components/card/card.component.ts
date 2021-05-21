import { Component } from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {

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

    classColor = 'red'

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
        this.title = event.target.value
    }

    onChangeRefInput( value: string ) {        
        this.title = value
    }


/**/
 


}