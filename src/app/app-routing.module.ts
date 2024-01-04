import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { ApprovalsComponent } from './approvals/approvals.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ScopeInputsComponent } from './scope-inputs/scope-inputs.component';
import{ ChangepasswordComponent} from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ForgetuserComponent } from './forgetuser/forgetuser.component';
import { ResetComponent } from './reset/reset.component';
import { ResetusernameComponent } from './resetusername/resetusername.component';
import { ProfileComponent} from './profile/profile.component';
import { InventorDataComponent } from './inventor-data/inventor-data.component';
import { FacilityInfoComponent } from './facility-info/facility-info.component';
import { CustomEmissionComponent } from './custom-emission/custom-emission.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addData', component: ScopeInputsComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'approvals', component: ApprovalsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'forgetuser',component:ForgetuserComponent},
  {path:'reset',component:ResetComponent},
  {path:'resetusername',component:ResetusernameComponent},
  {path:'profile',component:ProfileComponent},
  {path:'inventorydata',component:InventorDataComponent},
  {path:'custom-emission',component:CustomEmissionComponent},
  {path:'facility',component:FacilityInfoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
