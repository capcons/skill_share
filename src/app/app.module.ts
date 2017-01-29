import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2/index";
import { SkillsService } from "./shared/model/skills.service";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsListComponent,
    TopMenuComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
