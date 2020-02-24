
import {Component,OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import {ActivatedRoute} from '@angular/router'



declare let toastr:any

@Component({

	template:`

	<div>
	<h1>Upcoming Event</h1>
	<hr/>	
	<div class="row">
	<div class="col-md-5" *ngFor="let event of events" >
	
	
	<events-thumbnail [event]="event"></events-thumbnail>
	</div>
	</div>
	
	
	
	</div>
	`
	

	
})
export class EventsListComponent implements OnInit{
	events:any
	constructor(private eventService:EventService,private route:ActivatedRoute){

	}

	ngOnInit()
	{
		this.events=this.route.snapshot.data['events']
	}


}