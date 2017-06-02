import {Component} from "@angular/core";

@Component({
    selector: "welcome",
    // moduleId: module.id,
    template: require("./welcome.component.html")
})
export class WelcomeComponent {

    public title: string = "Welcome page";


    public sayBye(): void {
        this.title = "Ok, bye!";
    }
}