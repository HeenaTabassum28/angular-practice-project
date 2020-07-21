import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserData } from 'src/shared/userdata.service';
import { Department } from 'src/shared/department.service';
import { FormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { Summary } from 'src/shared/summary.pipe';

@NgModule({
  declarations: [ // It is use to store the component details
    AppComponent, MycompComponent, HeaderComponent, FooterComponent, FavouriteComponent, LikeComponent
    , PipedemoComponent, Summary
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [UserData, Department],
  bootstrap: [AppComponent]
})
export class AppModule { }
