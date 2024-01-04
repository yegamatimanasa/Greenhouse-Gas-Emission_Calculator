import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetuser',
  templateUrl: './forgetuser.component.html',
  styleUrls: ['./forgetuser.component.css']
})
export class ForgetuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  confirm(email:string){
    alert(email);
  }
}
