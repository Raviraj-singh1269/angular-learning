import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PropsRoutingModule } from './props/props-routing.module';
import { PropsModule } from './props/props.module';
import { FormreactiveModule } from './formreactive/formreactive.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PropsModule,
    FormreactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
