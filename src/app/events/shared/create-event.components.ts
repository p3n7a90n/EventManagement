import {Component} from '@angular/core'
import {Router} from '@angular/router'
import { EventService } from './event.service'


@Component({
    templateUrl:'./create-event.component.html',
    styles:[
        `em{ float:right;color:#E05C65;padding-left:10px;}`
    ]

   


})

export class CreateEventComponent{
    newEvent
    isDirty:boolean=true
    constructor(private router:Router,private eventService:EventService)
    {
        
    }



    saveEvent(formValues)
    {
        //console.log(formValues)
        this.eventService.saveEvent(formValues)
        this.isDirty=false 
        this.router.navigate(['/events'])
    }

    cancel()
    {
        this.router.navigate(['/events'])
    }


}