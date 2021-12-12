import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptorDonorViewComponent } from './acceptor-donor-view/acceptor-donor-view.component';
import { AcceptorLoginComponent } from './acceptor-login/acceptor-login.component';
import { AcceptorRequestListViewComponent } from './acceptor-request-list-view/acceptor-request-list-view.component';
import { AcceptorRequestComponent } from './acceptor-request/acceptor-request.component';
import { AcceptorComponent } from './acceptor/acceptor.component';
import { AdminAcceptorRequestViewComponent } from './admin-acceptor-request-view/admin-acceptor-request-view.component';
import { AdminDonationsRequestViewComponent } from './admin-donations-request-view/admin-donations-request-view.component';
import { AdminDonorRequestViewComponent } from './admin-donor-request-view/admin-donor-request-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { DonationRequest } from './donationRequest';
import { DonorDonationRequestViewComponent } from './donor-donation-request-view/donor-donation-request-view.component';
import { DonorDonationRequestComponent } from './donor-donation-request/donor-donation-request.component';
import { DonorLoginComponent } from './donor-login/donor-login.component';
import { DonorRequestListViewComponent } from './donor-request-list-view/donor-request-list-view.component';
import { DonorRequestComponent } from './donor-request/donor-request.component';
import { DonorComponent } from './donor/donor.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full",canActivate:[AuthGaurdService]},
  {path:"header",component:HeaderComponent},
  {path:"acceptor",component:AcceptorComponent},
  {path:"admin",component:AdminComponent},
  {path:"donor",component:DonorComponent},
  {path:"donorRequest",component:DonorRequestComponent},
  {path:"myRequest",component: DonorRequestListViewComponent},
  {path:"acceptorRequest",component:AcceptorRequestComponent},
  {path:"myAcceptorRequest",component:AcceptorRequestListViewComponent},
  {path:"main",component:MainComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGaurdService]},
  {path:"register",component:RegistrationComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"acceptorLogin",component:AcceptorLoginComponent},
  {path:"donorLogin",component:DonorLoginComponent},
  {path:"adminAcceptorRequest",component:AdminAcceptorRequestViewComponent},
  {path:"adminDonorRequest",component:AdminDonorRequestViewComponent},
  {path:"donationRequest",component:DonorDonationRequestComponent},
  {path:"donationRequestView",component:DonorDonationRequestViewComponent},
  {path:"adminDonationsView",component:AdminDonationsRequestViewComponent},
  {path:"sendNotification",component:SendNotificationComponent},
  {path:"acceptorDonorView",component:AcceptorDonorViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
