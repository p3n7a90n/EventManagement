import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {
  
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
SessionListComponent,
DurationPipe,


  





} from './events/index'

import {EventsAppComponent} from './events-app.component'
import { NavBarComponent } from './nav/nav-bar.component';
import {TOASTR_TOKEN,Toastr,JQ_TOKEN,collapsibleWellComponent,SimpleModel,ModalTriggerDirective} from './common/index'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component'
import { AuthService} from './user/auth.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

let toastr:Toastr=window['toastr']
let jQuery=window['$']


@NgModule({

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    Error404Component,
    NavBarComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    collapsibleWellComponent,
    DurationPipe,
    SimpleModel,
    ModalTriggerDirective
    

   
  ],
  providers:[ EventService,EventRouteActivator,
    {provide:TOASTR_TOKEN,useValue:toastr},
    {provide:JQ_TOKEN,useValue:jQuery},

    
  {provide:'canDeactivateCreateEvent',useValue:checkDirtyState},

  EventListResolver,
  AuthService
  
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule

  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule {}
export function  checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty)
  {
    return window.confirm('You have not saved any event,do u really want to cancel it?')
  }
  else
return true

  


 }
