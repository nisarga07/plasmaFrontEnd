import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGaurdService } from './auth-gaurd.service';
import { JwtAuthenticateService } from './jwt-authenticate.service';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DonorComponent } from './donor/donor.component';
import { AcceptorComponent } from './acceptor/acceptor.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DonorRequestComponent } from './donor-request/donor-request.component';
import { DonorRequestListViewComponent } from './donor-request-list-view/donor-request-list-view.component';
import { AcceptorRequestComponent } from './acceptor-request/acceptor-request.component';
import { AcceptorRequestListViewComponent } from './acceptor-request-list-view/acceptor-request-list-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AcceptorLoginComponent } from './acceptor-login/acceptor-login.component';
import { DonorLoginComponent } from './donor-login/donor-login.component';
import { AdminAcceptorRequestViewComponent } from './admin-acceptor-request-view/admin-acceptor-request-view.component';
import { AdminDonorRequestViewComponent } from './admin-donor-request-view/admin-donor-request-view.component';
import { DonorDonationRequestComponent } from './donor-donation-request/donor-donation-request.component';
import { DonorDonationRequestViewComponent } from './donor-donation-request-view/donor-donation-request-view.component';
import { AdminDonationsRequestViewComponent } from './admin-donations-request-view/admin-donations-request-view.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { AcceptorDonorViewComponent } from './acceptor-donor-view/acceptor-donor-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    DonorComponent,
    AcceptorComponent,
    HeaderComponent,
    MainComponent,
    MessageComponent,
    FooterComponent,
    AdminComponent,
    RootNavComponent,
    DonorRequestComponent,
    DonorRequestListViewComponent,
    AcceptorRequestComponent,
    AcceptorRequestListViewComponent,
    AdminLoginComponent,
    AcceptorLoginComponent,
    DonorLoginComponent,
    AdminAcceptorRequestViewComponent,
    AdminDonorRequestViewComponent,
    DonorDonationRequestComponent,
    DonorDonationRequestViewComponent,
    AdminDonationsRequestViewComponent,
    SendNotificationComponent,
    AcceptorDonorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AuthGaurdService,JwtAuthenticateService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
