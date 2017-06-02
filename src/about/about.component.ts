import {Component} from "@angular/core";

@Component({
    selector: "about",
    // moduleId: module.id,
    template: require("./about.component.html")
})
export class AboutComponent {

    public title: string = "About page";
}