import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDComponent } from './sous_composants/cd/cd.component';
import { HeaderComponent } from './sous_composants/header/header.component';
import { ListCDComponent } from './sous_composants/list-cd/list-cd.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NewCDComponent } from './new-cd/new-cd.component';

@NgModule({
  declarations: [
    AppComponent,
    CDComponent,
    HeaderComponent,
    ListCDComponent,
    HomeComponent,
    NewCDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
