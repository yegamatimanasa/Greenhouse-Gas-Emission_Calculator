import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-info',
  templateUrl: './facility-info.component.html',
  styleUrls: ['./facility-info.component.css']
})
export class FacilityInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(fid:string,finfo:string,loc1:String,loc2:String,grid:String){
    alert(fid+' '+finfo+' '+loc1+' '+loc2+' '+grid)

  }
 
  
}
