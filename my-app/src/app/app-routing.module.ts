import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLivingComponent } from './home-living/home-living.component';
import { FruitsVegetablesComponent } from './fruits-vegetables/fruits-vegetables.component';
import { BeautyHygieneComponent } from './beauty-hygiene/beauty-hygiene.component';
import { EggsMeatFishComponent } from './eggs-meat-fish/eggs-meat-fish.component';
const routes: Routes = [
  { path: 'LoginPage', component: LoginPageComponent },
  { path: 'SignupPage', component: SignupPageComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  {
    path: 'HomePage', component: HomePageComponent, children: [
      { path: 'HomePage', component: HomePageComponent },
      { path: 'HomeLiving', component: HomeLivingComponent },
      { path: 'FruitsVegetables', component: FruitsVegetablesComponent },
      { path: 'BeautyHygiene', component: BeautyHygieneComponent },
      { path: 'EggsMeatFish', component: EggsMeatFishComponent },
    ],
  },

  { path: '', redirectTo: '/LoginPage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
