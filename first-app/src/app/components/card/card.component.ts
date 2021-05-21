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

}