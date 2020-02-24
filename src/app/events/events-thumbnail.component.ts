import {Component,Input} from '@angular/core'

@Component({
    selector:'events-thumbnail',
    template:`

    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
		<h2>{{event?.name|uppercase}}</h2>
		<div>Date:{{event?.date|date}}</div>
		<div [ngClass]="getFunctionClass()" [ngSwitch]="event?.time">

		Time:{{event?.time}}

		<span *ngSwitchCase="'8:00 am'">(Early Start)</span>
		<span *ngSwitchCase="'10:00 am'">(Late Start)</span>
		<span *ngSw	itchDefault>(Normal Start)</span>
		</div>
		<div>Price:{{event?.price|currency:'INR'}}</div>
		<div *ngIf="event?.location">
	
		<span>Location:{{event?.location?.address}}</span>	
		<span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
		</div>
		<div *ngIf="event?.onlineUrl">
		Online URL:{{event?.onlineUrl}}
		</div>

	</div>
	`,
	
	styles:[
		`
		.green { color:green!important;}
		.pad-left {margin-left:10px;}
		 .well div{color:red;}
		 .well {min-height:220px;}
		 .bold {font-weight:bold;}
 
		
		
		`
	]
    
 

	

	
})

export class EventsThumbnailComponent{

	@Input() event:any
	
	logfoo(){


		console.log("tetsing");
	}

	getFunctionClass()
	{
		if(this.event && this.event.time==='8:00 am')
		{
			return ['bold','green']
		}
		return []
	}



	



}