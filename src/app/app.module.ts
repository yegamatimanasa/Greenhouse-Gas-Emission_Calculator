import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScopeInputsComponent } from './scope-inputs/scope-inputs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
// import { ApprovalsComponent } from './approvals/approvals.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ForgetuserComponent } from './forgetuser/forgetuser.component';
import { ResetComponent } from './reset/reset.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetusernameComponent } from './resetusername/resetusername.component';
import { InventorDataComponent } from './inventor-data/inventor-data.component';
import { FacilityInfoComponent } from './facility-info/facility-info.component';
import { CustomEmissionComponent } from './custom-emission/custom-emission.component';


@NgModule({
  declarations: [
    AppComponent,
    ScopeInputsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    // ApprovalsComponent,
    RegisterComponent,
    LoginComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent,
    ForgetuserComponent,
    ResetComponent,
    ProfileComponent,
    ResetusernameComponent,
    InventorDataComponent,
    FacilityInfoComponent,
    CustomEmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
