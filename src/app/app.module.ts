import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { Footer } from './global/footer/footer.component';
import { NetworkActivitiesComponent } from './content/network-activities/network-activities.component';
import { PagesModule } from './pages/pages.module'
import { AuthenticationModule } from './authentication/authentication.module'
import {CountryService} from './pages/view/country.service'

export const AppRoutes2: Routes = [
  { path: '', component: ContentComponent },
  // { path: '**', component: NoContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoContentComponent,
    ContentComponent,
    TopNavBarComponent,
    FontAwesomeDirective,
    Footer,
    NetworkActivitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes2, { useHash: true }),
    PagesModule,
    AuthenticationModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
