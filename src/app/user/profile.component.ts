import { Component ,OnInit,Inject} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {AuthService} from './auth.service'
import { Router } from '@angular/router'
import { Toastr ,TOASTR_TOKEN} from '../common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styles:[
    `
    em {float:right;color:#E05C65;padding-left:10px;}
    .error input {background:#E05C65; }
    `
  ]
   
  
})

export class ProfileComponent implements OnInit{
  constructor(private authservice:AuthService,private router:Router,@Inject(TOASTR_TOKEN) private toastr:Toastr)
  {

  }
profileForm:FormGroup
private firstName:FormControl
private lastName:FormControl
  ngOnInit()
{ this.firstName=new FormControl(this.authservice.currentUser.firstName,[Validators.required,Validators.pattern('[A-Za-z].*')])
  this.lastName=new FormControl(this.authservice.currentUser.lastName,[Validators.required,Validators.pattern('[A-Za-z].*')])
  this.profileForm=new FormGroup({
    firstName:this.firstName,
    lastName:this.lastName
  })

}

cancel()
{
  this.router.navigate(['events'])
}
saveProfile(formValues)
{ //console.log("testing")
if(this.profileForm.valid)
{
  this.authservice.updateCurrentUser(formValues.firstName,formValues.lastName)
  console.log("tesing")
  this.toastr.success("Profile Saved");
}
}
vaildateFirstName()
{

return this.firstName.valid || this.firstName.untouched
}
validateLastName()
{

return this.lastName.valid && this.lastName.untouched
}

       
}