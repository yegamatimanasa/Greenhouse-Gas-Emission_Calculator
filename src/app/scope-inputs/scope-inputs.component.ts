import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-scope-inputs',
  templateUrl: './scope-inputs.component.html',
  styleUrls: ['./scope-inputs.component.css']
})
export class ScopeInputsComponent {
  ScopeForm = new FormGroup({
    S1Sc: new FormGroup({
      Fid: new FormControl(),
      Year: new FormControl(),
      Cef: new FormControl(),
      Fuel: new FormControl(),
      AoF: new FormControl(),
      Unit: new FormControl(),
    }),
    S1Mc: new FormGroup({
      Year: new FormControl(),
      Desc: new FormControl(),
      Fid: new FormControl(),
      Atyp: new FormControl(),
      FS: new FormControl(),
      VT: new FormControl(),
      ActAmt: new FormControl(),
      UoF: new FormControl(),
    }),
    S1R: new FormGroup({
      Year: new FormControl(),
      Fid: new FormControl(),
      Type: new FormControl(),
      RefUsed: new FormControl(),
      RIBeginYr: new FormControl(),
      RIEndYr: new FormControl(),
      RPur: new FormControl(),
      RRUsr: new FormControl(),
      RROff: new FormControl(),
      RCE: new FormControl(),
      RDC: new FormControl(),
      RRPro: new FormControl(),
      RSOff: new FormControl(),
      NCpty: new FormControl(),
      DPPartChrg: new FormControl(),
      DPFullChrg: new FormControl()
    }),
    S2Pe: new FormGroup({
      Year: new FormControl(),
      Fid: new FormControl(),
      AmtEc: new FormControl(),
      Unit: new FormControl(),
      CalAppr: new FormControl(),
      Type: new FormControl(),
      Cef: new FormControl()
    }),
    S3T: new FormGroup({
      Year: new FormControl(),
      Desc: new FormControl(),
      Cat: new FormControl(),
      Ef: new FormControl(),
      MoT: new FormControl(),
      ActType: new FormControl(),
      VType: new FormControl(),
      AmtAct: new FormControl(),
      Unit: new FormControl(),
    }),
  })

  submit() {
    alert(JSON.stringify(this.ScopeForm.value));
  }
}
