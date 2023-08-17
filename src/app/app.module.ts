import { TesteComponent } from './teste/teste.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { ConfirmModalComponent } from './features/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    TesteComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    LoginComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
