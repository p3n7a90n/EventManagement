import {Directive ,OnInit, Inject,ElementRef} from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'

@Directive({


    selector:'[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el:HTMLElement

    constructor(@Inject(JQ_TOKEN) private $:any, private elementRef:ElementRef)
    {
        this.el=elementRef.nativeElement
    }

    ngOnInit()
    {   this.el.addEventListener('click',e=>{

        this.$('#simple-modal').modal({})
    })
       
    }
}