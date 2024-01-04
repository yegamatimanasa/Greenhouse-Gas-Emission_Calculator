import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventor-data',
  templateUrl: './inventor-data.component.html',
  styleUrls: ['./inventor-data.component.css']
})
export class InventorDataComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
    
  }
  submit(inventoryyear:string,sdate:string,edate:String,exclusions:String){
    alert(inventoryyear+' '+sdate+' '+edate+' '+exclusions)

  }

 
}
