import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLivingComponent } from './home-living/home-living.component';
import { FruitsVegetablesComponent } from './fruits-vegetables/fruits-vegetables.component';
import { BeautyHygieneComponent } from './beauty-hygiene/beauty-hygiene.component';
import { EggsMeatFishComponent } from './eggs-meat-fish/eggs-meat-fish.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuyNowComponent } from './buy-now/buy-now.component';
//import { HomePage1Component } from './home-page1/home-page1.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    HomeLivingComponent,
    FruitsVegetablesComponent,
    BeautyHygieneComponent,
    EggsMeatFishComponent,
    BuyNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
