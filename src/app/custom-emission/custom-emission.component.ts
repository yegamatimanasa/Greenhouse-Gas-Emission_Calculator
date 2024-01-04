import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-emission',
  templateUrl: './custom-emission.component.html',
  styleUrls: ['./custom-emission.component.css']
})
export class CustomEmissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
submit(){

alert("Are you sure..?")
}
}

//cef:string,scope:string,at:string,sef:string,fco2:number,CH4:number,N2O:number,bfCO2:number,CO2e:number,nunit:string,dunit:string
//cef.value,scope.value,at.value,sef.value,fco2.value,CH4.value,N2O.value,bfCO2.value,CO2e.value,nunit.value,dunit.value
//cef+' '+scope+' '+at+' '+sef+' '+fco2+' '+CH4+' '+N2O+' '+bfCO2+' '+CO2e+' '+nunit+' '+dunit
