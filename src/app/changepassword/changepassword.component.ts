import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(oldpassword:string,newpassword:string,confirmpassword:string){
    alert(+oldpassword+' '+newpassword+' '+confirmpassword);
  }
}



