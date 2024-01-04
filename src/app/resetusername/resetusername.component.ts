import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetusername',
  templateUrl: './resetusername.component.html',
  styleUrls: ['./resetusername.component.css']
})
export class ResetusernameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reset(newusername:string){
    alert(newusername);
  }
}
