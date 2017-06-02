import {NgModule} from "@angular/core";
import {WelcomeComponent} from "../welcome/welcome.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {F7Service} from "./f7.service";
import {AboutComponent} from "../about/about.component";

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule.forRoot([
        {path: "welcome", component: WelcomeComponent},
        {path: "about", component: AboutComponent},
        {path: "", component: AppComponent},
        {path: "**", redirectTo: "", pathMatch: "full"}
    ]), FormsModule, HttpModule],
    providers: [F7Service],
    declarations: [AppComponent, WelcomeComponent, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}