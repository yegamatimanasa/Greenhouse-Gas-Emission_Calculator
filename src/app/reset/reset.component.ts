import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reset(newpassword:string,confirmpassword:string){
    alert(newpassword+' '+confirmpassword);
  }
}
